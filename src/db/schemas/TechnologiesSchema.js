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

const tecnologiasdb = mongoose.model("tecnologiasdb", tecnologiasSchema);

module.exports = tecnologiasdb;
