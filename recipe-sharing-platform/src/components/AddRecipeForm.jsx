// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '', // Will be parsed into an array
    instructions: '', // Will be parsed into an array
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required.';
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required.';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required.';
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required. Enter one per line.';
    } else if (formData.ingredients.split('\n').filter(Boolean).length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients.';
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instructions are required. Enter one step per line.';
    } else if (formData.instructions.split('\n').filter(Boolean).length < 2) {
      newErrors.instructions = 'Please list at least two instruction steps.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      try {
        const newRecipe = {
          id: Date.now(), // Simple unique ID for mock data
          title: formData.title.trim(),
          summary: formData.summary.trim(),
          image: formData.image.trim(),
          ingredients: formData.ingredients.split('\n').map(item => item.trim()).filter(Boolean),
          instructions: formData.instructions.split('\n').map(item => item.trim()).filter(Boolean),
        };

        console.log('New Recipe Data:', newRecipe);
        alert('Recipe submitted successfully! Check console for data.');
        
        // Optionally, reset form or navigate away
        setFormData({
            title: '',
            summary: '',
            image: '',
            ingredients: '',
            instructions: '',
        });
        // navigate('/'); // Uncomment to redirect to home page after submission
      } catch (submitError) {
        console.error("Error submitting recipe:", submitError);
        alert('Failed to submit recipe.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 py-8 max-w-5xl">
      <button
        onClick={() => navigate('/')}
        className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to Recipes
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Share Your Culinary Masterpiece
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Fill in the details below to add a new recipe to our collection.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column for Title, Summary, Image */}
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Recipe Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm
                              focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                              ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="e.g., Spicy Chicken Tacos"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              <div>
                <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Summary
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  rows="3"
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm
                              focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                              ${errors.summary ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="A short description of your delicious recipe..."
                ></textarea>
                {errors.summary && (
                  <p className="mt-1 text-sm text-red-600">{errors.summary}</p>
                )}
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm
                              focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                              ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="e.g., https://example.com/tacos.jpg"
                />
                {errors.image && (
                  <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                )}
              </div>
            </div>

            {/* Right Column for Ingredients */}
            <div className="space-y-6">
              <div>
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
                  Ingredients <span className="text-gray-500 text-xs">(one per line)</span>
                </label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  rows="6"
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm
                              focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                              ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="1 lb chicken breast&#10;2 tbsp olive oil&#10;1 onion, chopped&#10;..."
                ></textarea>
                {errors.ingredients && (
                  <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
                )}
              </div>
            </div>
          </div>

          {/* Instructions Section (Full Width) */}
          <div>
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
              Preparation Steps <span className="text-gray-500 text-xs">(one step per line)</span>
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="8"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm
                          focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                          ${errors.instructions ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="1. Heat oil in a large skillet.&#10;2. Add chicken and cook until browned.&#10;3. Add vegetables and stir-fry.&#10;..."
            ></textarea>
            {errors.instructions && (
              <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex justify-center py-3 px-8 border border-transparent rounded-md
                          shadow-sm text-lg font-medium text-white bg-blue-600
                          hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                          focus:ring-blue-500 transition duration-300
                          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Share Recipe'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;