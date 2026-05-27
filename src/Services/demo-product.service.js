const { getDB } = require("../Config/db");

/**
 * Service to handle demo product database operations
 */

const demoProductCollection = () => {
  return getDB().collection("demo-products");
};

/**
 * Fetch all demo products from the database
 * @returns {Promise<Array>} - Array of all demo products
 */
const getAllDemoProductsFromDB = async () => {
  // Return all demo products without the main_file_link
  return await demoProductCollection()
    .find({})
    .project({ main_file_link: 0 })
    .toArray();
};

module.exports = {
  getAllDemoProductsFromDB,
};
