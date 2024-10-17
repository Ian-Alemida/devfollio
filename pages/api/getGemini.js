import { inicializarChat, chat } from "@/geminiAI/startGemini";

async function getGemini(req, res) {
  // Caso a requisição utilize o método POST, pega a variável que contem a pergunta do usuário e define ela como o corpo da requisição
  if (req.method === "POST") {
    const { userQuestion } = req.body;

    // Chama a função inicializarChat caso o chat esteja vazio.
    if (!chat) {
      inicializarChat();
    }

    try {
      const result = await chat.sendMessage(userQuestion); //Envia a mensagem para a API do gemini
      const response = await result.response;
      const text = await response.text();
      res.status(200).json(text); // passa a resposta do gemini para a resposta da requisição e devolve para minha pagina em forma de texto
    } catch (error) {
      res.status(500).json({ error: "Falha ao gerar resposta" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido  " });
  }
}

export default getGemini;
