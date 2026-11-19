function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const formData = new FormData(event.currentTarget);
  //     const newIngredient = formData.get("ingredient");
  //   }

  return (
    <main className="main-container">
      <form className="add-ingredient-form">
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
