const express = require("express");
const { authenticate, authorize } = require("../middleware/auth");
const {
  createOrder,
  getAdminOrders,
  getUserOrders,
  getVendorOrders
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", authenticate, authorize("customer"), createOrder);
router.get("/user/:id", authenticate, getUserOrders);
router.get("/vendor/:id", authenticate, authorize("vendor", "admin"), getVendorOrders);
router.get("/admin", authenticate, authorize("admin"), getAdminOrders);

module.exports = router;
