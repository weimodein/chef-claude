import ReactMarkdown from "react-markdown";
import chefClaudeIcon from "../assets/chef-claude-icon.png";

function ClaudeRecipe({ recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card__header">
        <img src={chefClaudeIcon} alt="" className="recipe-card__icon" />
        <h2>Chef Claude Recommends</h2>
      </div>
      <div className="suggested-recipe-container">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </article>
  );
}

export default ClaudeRecipe;
