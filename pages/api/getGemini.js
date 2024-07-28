import { inicializarChat, chat } from "@/geminiAI/startGemini";

async function getGemini(req, res) {
  if (req.method === "POST") {
    const { userQuestion } = req.body;

    if (!chat) {
      inicializarChat();
      console.log("O chat foi inicializado");
    }

    try {
      const result = await chat.sendMessage(userQuestion);
      const response = await result.response;
      const text = response.text();
      res.status(200).json(text);
    } catch (error) {
      res.status(500).json({ error: "Falha ao gerar resposta" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default getGemini;
