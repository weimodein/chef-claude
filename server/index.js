import express from "express";
import { getRecipeFromGemini } from "./ai.js";

const app = express();
app.use(express.json());

app.post("/api/recipe", async (req, res) => {
  const { ingredients } = req.body;

  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({ error: "Add at least one ingredient." });
  }

  try {
    const recipe = await getRecipeFromGemini(ingredients);
    res.json({ recipe });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not generate a recipe." });
  }
});

app.listen(3001, () => {
  console.log("API server listening on http://localhost:3001");
});
