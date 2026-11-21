function IngredientsList({
  ingredients,
  getRecipe,
  isLoading,
  removeIngredient,
}) {
  const remaining = 4 - ingredients.length;

  return (
    <section className="ingredients-card">
      <div className="section-header">
        <h2>Ingredients on hand</h2>
        <span className="count-badge">{ingredients.length}</span>
      </div>

      <ul className="ingredients-list" aria-live="polite">
        {ingredients.map((ingredient, index) => (
          <li key={`${ingredient}-${index}`} className="ingredient-chip">
            <span>{ingredient}</span>
            <button
              type="button"
              className="ingredient-chip__remove"
              onClick={() => removeIngredient(index)}
              aria-label={`Remove ${ingredient}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {ingredients.length > 3 ? (
        <div className="get-recipe-container">
          <div className="get-recipe-text">
            <h3>Ready for a recipe?</h3>
            <p>Generate one from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe} disabled={isLoading}>
            {isLoading ? "Generating..." : "Get recipe"}
          </button>
        </div>
      ) : (
        <p className="get-recipe-hint">
          Add {remaining} more ingredient{remaining === 1 ? "" : "s"} to unlock
          recipe suggestions.
        </p>
      )}
    </section>
  );
}

export default IngredientsList;
