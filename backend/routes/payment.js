const express = require("express");
const { authenticate, authorize } = require("../middleware/auth");
const { createPaymentOrder, verifyPayment } = require("../controllers/paymentController");

const router = express.Router();

router.post("/create-order", authenticate, authorize("customer"), createPaymentOrder);
router.post("/verify", authenticate, authorize("customer"), verifyPayment);

module.exports = router;
