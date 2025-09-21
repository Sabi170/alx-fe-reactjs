import { Link } from "react-router-dom";
import useRecipeStore from "../recipeStore";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
