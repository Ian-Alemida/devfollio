import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAODjtaXlOeanmooLC4pcJGtcWQ_HFB5RA");

export default async function handler(req, res, usermessage) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = usermessage;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json(text);
  } catch (error) {
    console.error("Erro ao chamar o Gemini:", error);
    res.status(500).json({ error: "Erro ao chamar o Gemini AI" });
  }
}
