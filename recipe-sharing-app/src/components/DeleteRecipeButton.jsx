import { useNavigate } from "react-router-dom";
import React from "react";
import { useRecipeStore } from "./recipeStore";

function DeleteRecipeButton({ recipeId }) {
    const deleteRecipe = useRecipeStore((store) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate("/");
    };
 
    return <button onClick={handleDelete}>Delete Recipe</button>;
}

export default DeleteRecipeButton;