import { useState } from "react";

function Main() {
  const [ingredients, setIngredient] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredients) => [...prevIngredients, newIngredient]);
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
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}

export default Main;
