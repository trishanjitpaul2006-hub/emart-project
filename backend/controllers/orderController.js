const pool = require("../config/db");

function mapOrderRows(rows) {
  const orders = new Map();
  rows.forEach((row) => {
    if (!orders.has(row.id)) {
      orders.set(row.id, {
        id: row.id,
        user_id: row.user_id,
        customerEmail: row.customerEmail,
        total: Number(row.total_amount),
        total_amount: Number(row.total_amount),
        status: row.status,
        razorpay_order_id: row.razorpay_order_id,
        razorpay_payment_id: row.razorpay_payment_id,
        createdAt: row.created_at ? new Date(row.created_at).getTime() : Date.now(),
        items: []
      });
    }
    if (row.product_id) {
      orders.get(row.id).items.push({
        productId: row.product_id,
        name: row.productName,
        vendorEmail: row.vendorEmail,
        vendor_id: row.vendor_id,
        quantity: row.quantity,
        price: Number(row.item_price)
      });
    }
  });
  return [...orders.values()];
}

async function fetchOrders(whereSql = "", params = []) {
  const [rows] = await pool.query(
    `SELECT o.*, c.email AS customerEmail, oi.product_id, oi.quantity, oi.price AS item_price,
            p.name AS productName, p.vendor_id, v.email AS vendorEmail
     FROM orders o
     JOIN users c ON c.id = o.user_id
     LEFT JOIN order_items oi ON oi.order_id = o.id
     LEFT JOIN products p ON p.id = oi.product_id
     LEFT JOIN users v ON v.id = p.vendor_id
     ${whereSql}
     ORDER BY o.created_at DESC`,
    params
  );
  return mapOrderRows(rows);
}

async function createOrder(req, res) {
  if (req.user.role !== "customer") {
    return res.status(403).json({ message: "Only customers can place orders" });
  }

  const { items, payment } = req.body;
  if (!Array.isArray(items) || !items.length) {
    return res.status(400).json({ message: "Order items are required" });
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const ids = items.map((item) => Number(item.productId || item.id));
    const [products] = await connection.query(`SELECT * FROM products WHERE id IN (?) FOR UPDATE`, [ids]);
    const productMap = new Map(products.map((product) => [Number(product.id), product]));

    let total = 0;
    const orderItems = items.map((item) => {
      const productId = Number(item.productId || item.id);
      const quantity = Math.max(1, Number(item.quantity || 1));
      const product = productMap.get(productId);
      if (!product) throw new Error(`Product ${productId} not found`);
      if (Number(product.stock) < quantity) throw new Error(`${product.name} is out of stock`);
      total += Number(product.price) * quantity;
      return { productId, quantity, price: Number(product.price) };
    });

    const [orderResult] = await connection.query(
      `INSERT INTO orders (user_id, total_amount, status, razorpay_order_id, razorpay_payment_id)
       VALUES (?, ?, ?, ?, ?)`,
      [req.user.id, total, payment?.status || "Paid", payment?.razorpay_order_id || null, payment?.razorpay_payment_id || null]
    );

    for (const item of orderItems) {
      await connection.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderResult.insertId, item.productId, item.quantity, item.price]
      );
      await connection.query("UPDATE products SET stock = stock - ? WHERE id = ?", [item.quantity, item.productId]);
    }

    await connection.commit();
    const [order] = await fetchOrders("WHERE o.id = ?", [orderResult.insertId]);
    res.status(201).json(order);
  } catch (error) {
    await connection.rollback();
    res.status(400).json({ message: error.message || "Order creation failed" });
  } finally {
    connection.release();
  }
}

async function getUserOrders(req, res) {
  if (req.user.role !== "admin" && Number(req.params.id) !== req.user.id) {
    return res.status(403).json({ message: "Access denied" });
  }
  res.json(await fetchOrders("WHERE o.user_id = ?", [req.params.id]));
}

async function getVendorOrders(req, res) {
  if (req.user.role !== "admin" && Number(req.params.id) !== req.user.id) {
    return res.status(403).json({ message: "Access denied" });
  }
  res.json(await fetchOrders("WHERE p.vendor_id = ?", [req.params.id]));
}

async function getAdminOrders(req, res) {
  res.json(await fetchOrders());
}

module.exports = { createOrder, getUserOrders, getVendorOrders, getAdminOrders };
