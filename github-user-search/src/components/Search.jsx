import React, { useState } from 'react';
// We'll modify fetchUserData to handle advanced search, so keep this import
// IMPORTANT: Make sure this import matches the new function name in githubService.js
import { searchGitHubUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState(''); // New state for location
  const [minRepos, setMinRepos] = useState(''); // New state for minimum repositories
  const [userData, setUserData] = useState([]); // Now an array for multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false); // To show "No results" only after a search

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMinReposChange = (event) => {
    // Ensure only numbers are entered
    const value = event.target.value;
    if (value === '' || /^[0-9]+$/.test(value)) {
      setMinRepos(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setUserData([]); // Clear previous results
    setHasSearched(true); // Indicate that a search has been attempted

    // Construct the query based on available inputs
    const queryParts = [];
    if (username.trim()) {
      queryParts.push(username.trim());
    }
    if (location.trim()) {
      queryParts.push(`location:${location.trim()}`);
    }
    if (minRepos.trim() && parseInt(minRepos, 10) > 0) {
      queryParts.push(`repos:>=${minRepos.trim()}`);
    }

    const searchQuery = queryParts.join(' ');

    if (!searchQuery.trim()) {
      setError("Please enter at least a username, location, or minimum repositories to search.");
      setLoading(false);
      return;
    }

    try {
      // Call the new searchGitHubUsers service function
      const data = await searchGitHubUsers(searchQuery);
      setUserData(data.items); // GitHub Search API returns an object with 'items' array
    } catch (err) {
      setError("Looks like we cant find any users matching your criteria.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="username" className="block text-left text-gray-700 text-sm font-bold mb-2">
              Username Keywords
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="e.g., octocat, react"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-left text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              placeholder="e.g., London, Germany"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="minRepos" className="block text-left text-gray-700 text-sm font-bold mb-2">
              Min. Repositories
            </label>
            <input
              type="number" // Use type="number" for numeric input
              id="minRepos"
              value={minRepos}
              onChange={handleMinReposChange}
              placeholder="e.g., 10"
              min="0" // Don't allow negative numbers
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Advanced Search'}
        </button>
      </form>

      <div className="results-area mt-8">
        {loading && <p className="text-blue-500 text-lg text-center">Loading...</p>}
        {error && <p className="text-red-500 text-lg text-center">{error}</p>}

        {!loading && !error && hasSearched && userData.length === 0 && (
          <p className="text-gray-600 text-lg text-center">No users found matching your criteria.</p>
        )}

        {userData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.map((user) => (
              <div
                key={user.id}
                className="user-card bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-200 ease-in-out"
              >
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-20 h-20 rounded-full mb-4 border-2 border-blue-400"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {user.login}
                </h3>
                {user.html_url && (
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mb-2"
                  >
                    View Profile
                  </a>
                )}
                {/* Note: The search API returns limited info. For full details (like location, bio, followers, public_repos),
                    you'd need to make a *secondary* API call for each user to the /users/{username} endpoint.
                    For this task, we'll display what the search API provides directly. */}
                <p className="text-sm text-gray-600">Score: {user.score ? user.score.toFixed(2) : 'N/A'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;