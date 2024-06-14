/*const { tecnologiasdb, cursosdb } = require("../Model/models.js");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000; // Porta para o servidor
const URI =
  "mongodb+srv://devfollioDB:uaMmrchkml7QPs2e@cluster0.ogzyvdv.mongodb.net/devfollio?retryWrites=true&w=majority&appName=Cluster0";
const cors = require("cors");

// permite acesso de qualquer origem
app.use(cors());

// Conectando ao MongoDB
mongoose
  .connect(URI, {})
  .then(() => {
    console.log("Conectado ao MongoDB Atlas!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB Atlas:", error);
  });

// Verificar conexão com o MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão com o MongoDB:"));
db.once("open", () => {});

// Definindo rotas para fornecer os dados do MongoDB
app.get("/api/tecnologiasdb", async (req, res) => {
  try {
    const dados = await tecnologiasdb.find(); // O modelo do banco de dados no Mongoose
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ message: "Erro ao buscar dados." });
  }
});
app.get("/api/cursosdb", async (req, res) => {
  try {
    const dados = await cursosdb.find(); // O modelo do banco de dados no Mongoose
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ message: "Erro ao buscar dados." });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});*/
