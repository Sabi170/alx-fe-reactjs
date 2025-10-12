import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json'; // Import the mock data

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await import('../data.json');
                setRecipes(data.default);
            } catch (err) {
                setError("Failed to load recipes.");
                console.error("Error loading recipes:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-xl text-gray-700">Loading recipes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-xl text-red-600">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 py-8">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
                Recipe Sharing Platform
            </h1>

            <p className="text-2xl text-center text-gray-700 mb-12">
                Discover, Cook & Share Delicious Recipes
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {recipes.map((recipe) => (
                    <div
                    key={recipe.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden
                            transform transition duration-300 hover:scale-105
                            hover:shadow-xl flex flex-col border border-gray-200"
                        >
                            <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover object-center"
                            />
                        <div className="p-6 flex-grow flex flex-col">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                {recipe.title}
                            </h2>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {recipe.summary}
                        </p>
                    <Link
                    to={'/recipe/${recipe.id}'}
                    className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md text-center
                            hover:bg-blue-700 transition duration-300 self-start w-full sm:w-autp"
                            >
                                View Recipe
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>    
    );   
};

export default HomePage;