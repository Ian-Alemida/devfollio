import db from "@/db/db.js";
import cursosdb from "@/db/schemas/cursosSchema";

async function getCourses(req, res) {
  await db.connectDB();
  try {
    const cursos = await cursosdb.find(); // Busca todos os usuários;
    res.status(200).json(cursos);
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

export default getCourses;
