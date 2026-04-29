const express = require("express");
const { authenticate, authorize } = require("../middleware/auth");
const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", authenticate, authorize("vendor", "admin"), createProduct);
router.put("/:id", authenticate, authorize("vendor", "admin"), updateProduct);
router.delete("/:id", authenticate, authorize("vendor", "admin"), deleteProduct);

module.exports = router;
