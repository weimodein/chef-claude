import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

function Main() {
  const [ingredients, setIngredient] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
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
          ingredientsList={ingredientsListItems}
          onclick={toggleRecipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}

export default Main;
