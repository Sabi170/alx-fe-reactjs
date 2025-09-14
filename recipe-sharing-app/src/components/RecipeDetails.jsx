import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
    const { id } = useParams();
    const reciprId = parseInt(id, 10);
    const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));

    if (!recipe) {
        return <p>Recipe not found!</p>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

            <h3>Edit Recipe</h3>
            <EditRecipeForm recipe={recipe} />

            <DeleteRecipeButton id={recipe.id} />
        </div>
    );
}