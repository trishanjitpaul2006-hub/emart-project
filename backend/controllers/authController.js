const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const allowedRoles = ["customer", "vendor", "admin"];

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, role: user.role };
}

function signToken(user) {
  return jwt.sign(publicUser(user), process.env.JWT_SECRET || "emart_dev_secret", {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d"
  });
}

async function register(req, res) {
  const { name, email, password, role = "customer" } = req.body;
  if (!name || !email || !password || !allowedRoles.includes(role)) {
    return res.status(400).json({ message: "Name, email, password, and valid role are required" });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name.trim(), email.trim().toLowerCase(), hash, role]
    );
    const user = { id: result.insertId, name: name.trim(), email: email.trim().toLowerCase(), role };
    return res.status(201).json({ user, token: signToken(user) });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") return res.status(409).json({ message: "Email already registered" });
    return res.status(500).json({ message: "Registration failed" });
  }
}

async function login(req, res) {
  const { email, password, role } = req.body;
  if (!email || !password || !allowedRoles.includes(role)) {
    return res.status(400).json({ message: "Email, password, and valid role are required" });
  }

  const [rows] = await pool.query("SELECT * FROM users WHERE email = ? AND role = ?", [email.trim().toLowerCase(), role]);
  const user = rows[0];
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.json({ user: publicUser(user), token: signToken(user) });
}

module.exports = { register, login };
