const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(URI, {})
    .then(() => {
      console.log("Conectado ao MongoDB Atlas!");
    })
    .catch((error) => {
      console.error("Erro ao conectar ao MongoDB Atlas:", error);
    });
}

module.exports = {
  connectDB,
};
