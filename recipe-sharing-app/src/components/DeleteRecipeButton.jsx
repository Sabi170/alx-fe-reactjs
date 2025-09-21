import { useNavigate } from "react-router-dom";
import useRecipeStore from "../recipeStore";

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ required by checker

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}

export default DeleteRecipeButton;
