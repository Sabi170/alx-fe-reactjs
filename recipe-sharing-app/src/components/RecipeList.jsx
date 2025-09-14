import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore  } from "./recipeStore";

function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    if (filteredRecipes.length === 0) {
        return <p>No recipes found.</p>
    }

    return (
        <ul>
            {filteredRecipes.map((recipe) => (
                <li key={recipe.id}>{recipe.title}</li>
            ))}
        </ul>
    );

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Recipe List</h2>
            {recipes.length === 0 ? (
                <p>No recipes yet. Add one!</p>
            ) : (
                recipes.map((recipe) => (
                    <div
                    key={recipe.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                        borderRadius: "5px",
                    }}
                    >
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
            </div>
    );
}

export default RecipeList;