const demoProductService = require("../Services/demo-product.service");

/**
 * Controller to fetch all demo products
 */
const getAllDemoProducts = async (req, res) => {
  try {
    // Call the service to get all demo products
    const demoProducts = await demoProductService.getAllDemoProductsFromDB();

    res.status(200).json(demoProducts);
  } catch (error) {
    console.error("Error in getAllDemoProducts (demo) controller:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllDemoProducts,
};
