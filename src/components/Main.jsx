import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

function Main() {
  const [ingredients, setIngredient] = useState([]);
  const [recipe, setRecipe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not generate a recipe");
      }

      console.log(data.recipe);
      const recipeMarkdown = data.recipe;
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="main-container">
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="eg. salt"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          isLoading={isLoading}
        />
      )}
      {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Generating your recipe...</p>
        </div>
      )}
      {recipe && !isLoading && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

export default Main;
