import mongoose from "mongoose";

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

const cursosdb = mongoose.model("cursosdb", cursosSchema);

export default cursosdb;
