
import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constant";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(OPENAI_KEY);

export async function run(query) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Act as a Moive recommendation system and suggest some movies  for the query : "+ query + ". Only gives me five movies, comma seperated like the example result given ahead. Example result : Gadar,Dhamal,Don,Koi mil gya,Sholay" 

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}


