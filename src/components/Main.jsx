import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")?.trim();
    if (!newIngredient) return;
    setIngredients((prev) => [...prev, newIngredient]);
    setRecipe(null);
    setError(null);
  }

  function removeIngredient(index) {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
    setRecipe(null);
    setError(null);
  }

  async function getRecipe() {
    setIsLoading(true);
    setError(null);
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

      setRecipe(data.recipe);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <section className="intro">
        <h2>What&rsquo;s in your kitchen?</h2>
        <p>
          Add what you have on hand, and Chef Claude will craft a recipe for
          you.
        </p>
      </section>

      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. tomatoes, garlic, basil..."
          name="ingredient"
          autoComplete="off"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length === 0 && (
        <div className="empty-state">
          <p>Your ingredient list is empty. Add something to get started.</p>
        </div>
      )}

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          isLoading={isLoading}
          removeIngredient={removeIngredient}
        />
      )}

      {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
          <div>
            <p className="loader__title">Chef Claude is cooking...</p>
            <p className="loader__subtitle">
              Crafting a recipe from your ingredients
            </p>
          </div>
        </div>
      )}

      {error && !isLoading && (
        <div className="error-card">
          <p>{error}</p>
        </div>
      )}

      {recipe && !isLoading && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

export default Main;
