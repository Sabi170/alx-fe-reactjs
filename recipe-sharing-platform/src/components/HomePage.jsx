import React, { useState, useEffect } from 'react';
import recipesData from '../data.json'; // Import the mock data

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    try {
      setRecipes(recipesData);
      setLoading(false);
    } catch (err) {
      setError("Failed to load recipes.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-700">Loading recipes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <p className="text-2xl text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        Our Delicious Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out
                       overflow-hidden border border-gray-200"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {recipe.summary}
              </p>
              {/* This will eventually be a Link to a detail page */}
              <button
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                           transition duration-150 ease-in-out"
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;