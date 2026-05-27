const { getDB } = require("../Config/db");

const reviewCollection = () => {
  const collection = getDB().collection("reviews");
  return collection;
};

// create review
const createReview = async (data) => {
  return await reviewCollection().insertOne(data);
};

// Read all reviews
const getAllReviews = () => {};
