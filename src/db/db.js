const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(URI);
}

module.exports = {
  connectDB,
};
