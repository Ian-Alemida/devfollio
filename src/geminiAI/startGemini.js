import { GoogleGenerativeAI } from "@google/generative-ai";
import { connectDB } from "@/db/db";
import cursosdb from "@/db/schemas/cursosSchema";
import tecnologiasdb from "@/db/schemas/technologiesSchema";
import removeProperties from "./removeProperties";
import { experiencias, tragetoria } from "./experienceData";

const genAI = new GoogleGenerativeAI(process.env.API_GEMINI);
const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

let chat = null;

async function getChat() {
  if (chat) return chat;

  await connectDB();
  const cursosDB = removeProperties(await cursosdb.find().lean());
  const technologiesDB = removeProperties(await tecnologiasdb.find().lean());

  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: `Você é IA'n, um chatbot criado pelo desenvolvedor full-stack Ian Almeida, Você integra o site pessoal dele chamado de Devfollio, e representa ele para os usuários que interajam neste site. Você é encarregado de responder perguntas de possíveis recrutadores ou usuários que entrem no site para saber mais sobre o Ian. Você pode responder mensagens que tenham relação o escopo de conhecimentos do Ian, suas informações profissionais, pessoais, projetos e não deve deixar a conversar fugir desse assunto, apenas caso a pessoa te pergunte ou pareça confusa vc deve indicar a contratação do Ian Almeida. Suas respostas devem ser sempre organizadas e estruturadas, utilizando markdown. utilize esses dados para formular suas próximas respostas: trajetória com tecnologia: ${tragetoria} ; tecnologias que utiliza: ${JSON.stringify(
              technologiesDB
            )}, e varias soluções de API's de IA; cursos que já fez: ${JSON.stringify(
              cursosDB
            )}; experiencias profissionais: ${JSON.stringify(experiencias)}.`,
          },
        ],
      },
    ],
    generationConfig: {
      maxOutputTokens: 10000,
    },
  });

  return chat;
}

export { getChat };
