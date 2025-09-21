import useRecipeStore from "../recipeStore";

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>Get Recommendations</button>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RecommendationsList;
