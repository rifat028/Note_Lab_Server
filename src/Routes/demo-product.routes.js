const express = require("express");
const router = express.Router();
const { getAllDemoProducts } = require("../Controllers/demo-product.controllers");

// GET /api/demo-products/ - Fetch all demo products
router.get("/", getAllDemoProducts);

module.exports = router;
