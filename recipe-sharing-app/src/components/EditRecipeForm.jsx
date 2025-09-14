import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

function EditRecipeForm({ recipe, onClose }) {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({...recipe, title, description });
        onClose();
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

export default EditRecipeForm;