const { connectDB } = require("../db/db.js");
const cursosdb = require("../Model/models.js");

async function getCourses(req, res) {
  await connectDB();
  try {
    const cursos = await cursosdb.find(); // Busca todos os usuários
    res.status(200).json(cursos);
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

module.exports = { getCourses };
