const mongoose = require("mongoose");

const tecnologiasSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    img: String,
    nome: String,
    text: String,
  },
  { collection: "tecnologias" }
);
const cursosSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    nome: String,
    plataform: String,
    link: String,
    skill: String,
    time: String,
    type: String,
  },
  { collection: "cursos" }
);
const tecnologiasdb = mongoose.model("tecnologiasdb", tecnologiasSchema);
const cursosdb = mongoose.model("cursosdb", cursosSchema);

module.exports = { tecnologiasdb, cursosdb };
