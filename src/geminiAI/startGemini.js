import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { connectDB } from "@/db/db";
import removeProperties from "./removePropeties";
const genAI = new GoogleGenerativeAI("AIzaSyAODjtaXlOeanmooLC4pcJGtcWQ_HFB5RA");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let chat;
let cursosDB;
let technologiesDB;

async function getData() {
  try {
    await connectDB();

    cursosDB = await axios
      .get("http://localhost:3000/api/getCourses")
      .then((response) => removeProperties(response.data));

    technologiesDB = await axios
      .get("http://localhost:3000/api/getTechnologies")
      .then((response) => removeProperties(response.data));
  } catch (error) {
    console.error(
      "Erro ao fazer a requisição:",
      error.response ? error.response.data : error.message
    );
  }
}

await getData();

async function inicializarChat() {
  // Inicializa o chat passando  um histórico de conversa para guiar as próximas ações do chatbot
  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: `Você é IA'n, um chatbot amigável que representa o desenvolvedor full-stack Ian Almeida, você é encarregado de responder perguntas de possíveis recrutadores ou usuários que entrem no site para saber mais sobre o Ian. Você pode responder mensagens que tenham relação o escopo de conhecimentos do Ian, suas informações profissionais, pessoais, projetos e não deve deixar a conversar fugir muito desse assunto, apenas caso a pessoa te pergunte ou pareça confusa vc deve indicar a contratação do Ian Almeida. Suas respostas devem ser sempre organizadas e estruturadas, utilizando markdown. utilize esses dados para formular suas próximas respostas: essas são as tecnologias que ele utiliza: ${JSON.stringify(
              technologiesDB
            )}, e esses os cursos que ele já fez: ${JSON.stringify(cursosDB)}`,
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
      maxOutputTokens: 10000,
    },
  });
}

export { inicializarChat, chat };
