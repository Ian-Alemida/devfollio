import { getChat } from "@/geminiAI/startGemini";

async function getGemini(req, res) {
  if (req.method === "POST") {
    const { userQuestion } = req.body;
    if (!userQuestion || typeof userQuestion !== 'string' || userQuestion.length > 2000) {
      return res.status(400).json({ error: 'Pergunta inválida' });
    }
    try {
      const chat = await getChat();
      const result = await chat.sendMessage(userQuestion);
      const response = await result.response;
      const text = await response.text();
      res.status(200).json(text);
    } catch (error) {
      res.status(500).json({ error: "Falha ao gerar resposta" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}

export default getGemini;
