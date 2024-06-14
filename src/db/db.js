const mongoose = require("mongoose");
const URI =
  "mongodb+srv://devfollioDB:uaMmrchkml7QPs2e@cluster0.ogzyvdv.mongodb.net/devfollio?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
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
