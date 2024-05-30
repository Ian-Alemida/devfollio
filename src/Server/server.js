const { tecnologiasdb, cursosdb } = require("../Model/models");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000; // Porta para o servidor
const URI =
  "mongodb+srv://devfollioDB:uaMmrchkml7QPs2e@cluster0.ogzyvdv.mongodb.net/devfollio?retryWrites=true&w=majority&appName=Cluster0";

// Conectando ao MongoDB
mongoose
  .connect(URI, {})
  .then(() => {
    console.log("Conectado ao MongoDB Atlas!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB Atlas:", err);
  });

// Verificar conexão com o MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão com o MongoDB:"));
db.once("open", () => {});

// Defina rotas para fornecer os dados do MongoDB
app.get("/api/tecnologiasdb", async (req, res) => {
  try {
    const dados = await tecnologiasdb.find(); // MeuModelo é seu modelo do Mongoose
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ message: "Erro ao buscar dados." });
  }
});
app.get("/api/cursosdb", async (req, res) => {
  try {
    const dados = await cursosdb.find(); // MeuModelo é seu modelo do Mongoose
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ message: "Erro ao buscar dados." });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
