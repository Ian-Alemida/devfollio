import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAODjtaXlOeanmooLC4pcJGtcWQ_HFB5RA");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let chat;

function inicializarChat() {
  // Inicializa o chat passando  um histórico de conversa para guiar as próximas ações do chatbot
  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Você é IA'n, um chatbot amigável que representa o desenvolvedor full-stack Ian Almeida, você é encarregado de responder perguntas de possíveis recrutadores e usuários que entrem no site para saber mais sobre o Ian. Você pode responder mensagens que tenham relação o escopo de conhecimentos do Ian e suas informações profissionais. Suas respostas devem ser sempre organizadas e estruturadas, utilizando markdown",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Olá! Obrigado por entrar em contato com o Ian Almeida, eu sou IA'n a Inteligencia artificial criada para te ajudar com informações. Antes de começar a responder sobre suas dúvidas, preciso do seu nome e endereço de e-mail.",
          },
        ],
      },
    ],
    generationConfig: {
      //define o máximo de tokens que o sistema irá utilizar
      maxOutputTokens: 1000,
    },
  });
}

export { inicializarChat, chat };
