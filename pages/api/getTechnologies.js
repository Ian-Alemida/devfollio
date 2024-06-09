import db from "@/db/db.js";
import tecnologiasdb from "@/db/schemas/technologiesSchema";

async function getTechnologies(req, res) {
  await db.connectDB();
  try {
    const tecnologias = await tecnologiasdb.find(); // Busca todos os usuários
    res.status(200).json(tecnologias);
  } catch (error) {
    console.error("Erro ao buscar tecnologias:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

export default getTechnologies;
