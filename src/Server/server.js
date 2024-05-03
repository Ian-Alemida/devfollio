const tecnologiass = require("../Model/tecnologiass");
const uri =
  "mongodb+srv://iandb:ckoimKd9u6amibgF@cluster0.ogzyvdv.mongodb.net/devfollio?retryWrites=true&w=majority&appName=Cluster0";
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000; // Porta para o servidor

// Conectando ao MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB Atlas!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB Atlas:", err);
  });

// Verificar conexão com o MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão com o MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao MongoDB!");
});

// Defina rotas para fornecer os dados do MongoDB
app.get("/api/dados", async (req, res) => {
  try {
    const dados = await tecnologiass.find(); // MeuModelo é seu modelo do Mongoose
    console.log(dados);
    res.json(dados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar dados." });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
