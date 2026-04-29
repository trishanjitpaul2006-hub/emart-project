const pool = require("../config/db");

function toProduct(row) {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    price: Number(row.price),
    oldPrice: Number(row.oldPrice || 0),
    discount: Number(row.discount || 0),
    stock: Number(row.stock || 0),
    image: row.image,
    description: row.description,
    vendor_id: row.vendor_id,
    vendorEmail: row.vendorEmail,
    createdAt: row.created_at ? new Date(row.created_at).getTime() : Date.now()
  };
}

async function getProducts(req, res) {
  const [rows] = await pool.query(
    `SELECT p.*, u.email AS vendorEmail
     FROM products p
     JOIN users u ON u.id = p.vendor_id
     ORDER BY p.created_at DESC`
  );
  res.json(rows.map(toProduct));
}

async function getProduct(req, res) {
  const [rows] = await pool.query(
    `SELECT p.*, u.email AS vendorEmail
     FROM products p
     JOIN users u ON u.id = p.vendor_id
     WHERE p.id = ?`,
    [req.params.id]
  );
  if (!rows.length) return res.status(404).json({ message: "Product not found" });
  res.json(toProduct(rows[0]));
}

async function createProduct(req, res) {
  const { name, category, price, oldPrice = 0, discount = 0, stock = 0, image, description } = req.body;
  if (!name || !category || !price || !image || !description) {
    return res.status(400).json({ message: "Required product fields are missing" });
  }

  const [result] = await pool.query(
    `INSERT INTO products (name, category, price, oldPrice, discount, stock, image, description, vendor_id)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, category, price, oldPrice, discount, stock, image, description, req.user.id]
  );
  req.params.id = result.insertId;
  return getProduct(req, res);
}

async function updateProduct(req, res) {
  const [rows] = await pool.query("SELECT vendor_id FROM products WHERE id = ?", [req.params.id]);
  const product = rows[0];
  if (!product) return res.status(404).json({ message: "Product not found" });
  if (req.user.role !== "admin" && product.vendor_id !== req.user.id) {
    return res.status(403).json({ message: "Vendors can update only their own products" });
  }

  const { name, category, price, oldPrice = 0, discount = 0, stock = 0, image, description } = req.body;
  await pool.query(
    `UPDATE products
     SET name = ?, category = ?, price = ?, oldPrice = ?, discount = ?, stock = ?, image = ?, description = ?
     WHERE id = ?`,
    [name, category, price, oldPrice, discount, stock, image, description, req.params.id]
  );
  return getProduct(req, res);
}

async function deleteProduct(req, res) {
  const [rows] = await pool.query("SELECT vendor_id FROM products WHERE id = ?", [req.params.id]);
  const product = rows[0];
  if (!product) return res.status(404).json({ message: "Product not found" });
  if (req.user.role !== "admin" && product.vendor_id !== req.user.id) {
    return res.status(403).json({ message: "Vendors can delete only their own products" });
  }
  await pool.query("DELETE FROM products WHERE id = ?", [req.params.id]);
  res.json({ message: "Product deleted" });
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
