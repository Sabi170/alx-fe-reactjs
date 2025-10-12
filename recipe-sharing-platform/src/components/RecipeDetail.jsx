import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const allRecipes = await import('../data.json');
                const foundRecipe = allRecipes.default.find(
                    (r) => r.id === parseInt(id)
                );

                if (foundRecipe) {
                    setRecipe (foundRecipe);
                } else {
                    setError('Recipe not found');
                }
            } catch (err) {
                setError('Failed to load recipe details.');
                console.error('Error loading recipe details:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-xl text-gray-700">Loading recipe...</p>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
                <p className="text-xl text-red-600 mb-4">Error: {error}</p>
                <button
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white py-2 px-6 rounded-md
                            hover:bg-blue-700 transition duration-300"
                    >
                        Go to Home
                    </button>
            </div>
        );
    }

    if (!recipe) {
        return null;
    }

    return (
        <div className="container mx-auto p-4 py-8 max-w-4xl">
            <button
            onClick={() => navigate('/')}
            >
                <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m10 191-7-7m0 017-7m-7 7h18"
                ></path>
                </svg>
                Back to Recipes
            </button>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    {recipe.title}
                </h1>
                <p className="text-xl text-gray-700 mb-6">{recipe.summary}</p>

                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-96 object-cover object-center rounded-lg mb-8 shadow-md"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">Ingredients</h2>
                        <ul className="list-disc list-inside space-y-2 textlg text-gray-800">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 text-blue-600">&#8226;</span>
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg shadow-inner">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Instructions</h2>
                        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-800">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} className="leading-relaxed">
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;