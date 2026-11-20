import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are a helpful recipe assistant. Suggest a recipe using some or all of the ingredients provided. You may add a few common extra ingredients. Format the recipe in Markdown.
`;

export async function getRecipeFromGemini(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const response = await ai.interactions.create({
    model: "gemini-3.5-flash-lite",
    input: `${SYSTEM_PROMPT}\nI have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
  });

  return response.output_text;
}
