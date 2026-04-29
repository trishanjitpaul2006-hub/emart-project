const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const dbName = process.env.DB_NAME || "emart_db";

const demoProducts = [
  ["Wireless Bluetooth Earbuds", "electronics", 1299, 2499, 45, 34, "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=85", "Glossy true wireless earbuds with rich bass, clear calls, and a pocket-friendly charging case."],
  ["Smart Watch", "electronics", 2499, 3999, 35, 21, "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85", "Premium fitness smartwatch with health tracking, bright display, and all-day battery support."],
  ["Gaming Keyboard", "electronics", 1799, 2999, 40, 18, "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=900&q=85", "Mechanical-style RGB keyboard built for fast typing, smooth gaming, and a sharp desk setup."],
  ["Men Sneakers", "fashion", 1799, 3599, 50, 27, "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85", "Lightweight street sneakers with cushioned soles and a clean finish for everyday outfits."],
  ["Women Handbag", "fashion", 2499, 3999, 35, 16, "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85", "Elegant structured handbag with premium texture, roomy storage, and polished metal accents."],
  ["Bluetooth Speaker", "electronics", 999, 1999, 50, 30, "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85", "Portable speaker with punchy sound, modern styling, and splash-resistant party-ready design."],
  ["Coffee Mug Set", "home-kitchen", 799, 999, 20, 55, "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=85", "Minimal ceramic mug set with a glossy finish, perfect for coffee corners and gifting."],
  ["Skincare Kit", "beauty", 1299, 1999, 35, 24, "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85", "Daily glow skincare combo with cleanser, serum, and moisturizer for a fresh routine."],
  ["Sports Shoes", "sports", 3999, 6999, 45, 19, "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=85", "High-energy running shoes with breathable mesh, soft cushioning, and grippy outsoles."],
  ["Travel Backpack", "accessories", 999, 1799, 45, 38, "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85", "Smart everyday backpack with laptop space, clean pockets, and a durable urban look."],
  ["Study Lamp", "home-kitchen", 499, 799, 35, 48, "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85", "Adjustable desk lamp with focused warm light for late study sessions and tidy workspaces."],
  ["Productivity Notebook", "books", 499, 999, 50, 60, "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85", "Premium study notebook with smooth pages, sturdy binding, and a clean planning layout."]
];

async function initDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    multipleStatements: true
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await connection.query(`USE \`${dbName}\``);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(160) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role ENUM('customer', 'vendor', 'admin') NOT NULL DEFAULT 'customer',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(180) NOT NULL,
      category VARCHAR(80) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      oldPrice DECIMAL(10,2) DEFAULT 0,
      discount INT DEFAULT 0,
      stock INT NOT NULL DEFAULT 0,
      image TEXT NOT NULL,
      description TEXT NOT NULL,
      vendor_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      total_amount DECIMAL(10,2) NOT NULL,
      status VARCHAR(40) NOT NULL DEFAULT 'Pending',
      razorpay_order_id VARCHAR(120),
      razorpay_payment_id VARCHAR(120),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      product_id INT NOT NULL,
      quantity INT NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    );
  `);

  const users = [
    ["Customer Demo", "customer@emart.com", "customer123", "customer"],
    ["Vendor Demo", "vendor@emart.com", "vendor123", "vendor"],
    ["Admin", "admin@emart.com", "admin123", "admin"]
  ];

  for (const [name, email, password, role] of users) {
    const hash = await bcrypt.hash(password, 10);
    await connection.query(
      "INSERT IGNORE INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hash, role]
    );
  }

  const [[vendor]] = await connection.query("SELECT id FROM users WHERE email = ?", ["vendor@emart.com"]);
  for (const product of demoProducts) {
    await connection.query(
      `INSERT INTO products (name, category, price, oldPrice, discount, stock, image, description, vendor_id)
       SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?
       WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = ?)`,
      [...product, vendor.id, product[0]]
    );
  }

  await connection.end();
  console.log(`Database ${dbName} is ready.`);
}

initDatabase().catch((error) => {
  console.error("Database initialization failed:", error);
  process.exit(1);
});
