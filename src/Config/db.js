const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

// function to connect with the mongodb
const connectDB = async function run() {
  try {
    await client.connect();

    db = client.db("NoteLab");
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
  }
};

// function to export database (db)
function getDB() {
  if (!db) {
    throw new Error("Database not initialized!");
  }
  return db;
}

module.exports = { connectDB, getDB };
