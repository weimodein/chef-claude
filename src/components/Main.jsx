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
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default Main;
