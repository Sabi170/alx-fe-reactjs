import React from "react";
import { useRecipeStore } from "./recipeStore";
import { ssrExportNameKey } from "vite/module-runner";

export default function DeleteRecipeButton({ id }) {
    const deleteRecipe = useRecipeStore((store) => state.deleteRecipe);

    return <button onClick={() => deleteRecipe(id)}>Delete Recipe</button>
}