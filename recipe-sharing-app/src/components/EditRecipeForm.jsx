import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm({ recipe }) {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useRecipeStore((state) => state.updateRecipe);
    const [description, setDescription] = useState(recipe.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({...recipe, title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit Title"
            />
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Edit Description"
            />

        <button type="submit">Save Changes</button>
        </form>
    );
}