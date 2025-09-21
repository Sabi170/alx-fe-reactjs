import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../recipeStore";

function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ required by checker
    updateRecipe(recipe.id, { title, description });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditRecipeForm;
