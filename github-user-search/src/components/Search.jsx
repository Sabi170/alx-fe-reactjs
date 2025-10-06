import React, { useState } from 'react';
// We'll modify fetchUserData to handle advanced search, so keep this import
// IMPORTANT: Make sure this import matches the new function name in githubService.js
import { searchGitHubUsers } from '../services/githubService';
import './Search.css';

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
    <div className="search-page-container"> {/* */}
    <form onSubmit={handleSubmit} className="search-form-card"> {/* */}
      <div className="search-input-grid">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username Keywords
          </label>
          <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="e.g., octocat, react"
          className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="e.g., London, Germany"
          className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="minRepos" className="form-label">
            Min. Repositories
          </label>
          <input
          type="number"
          id="minRepos"
          value={minRepos}
          onChange={handleMinReposChange}
          placeholder="e.g., 10"
          min="0"
          className="form-input"
          />
        </div>
      </div>
      <button
      type="submit"
      className="search-button"
      disabled={loading}
      >
        {loading ? 'Searching...' : 'Advanced Search'}
      </button>
    </form>

    <div className="results-area"> {/* */}
      {loading && <p className="status-message loading">Loading...</p>}
      {error && <p className="status-message error">{error}</p>}

      {!loading && !error && hasSearched && userData.length === 0 && (
        <p className="status-message no results">No users found matching your
        criteria.</p>
      )}

      {userData.length > 0 && (
        <div className="user-grid-results"> {/* */}
        {userData.map((user) => (
          <div
            key={user.id}
            className="user-card"
            >
              <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="user-avatar"
              />
              <h3 className="user-login-name">
                {user.login}
              </h3>
              {user.html_url && (
                <a
                href={user.html_url}
                rel="noopener noreferrer"
                className="user-profile-link"
                >
                  View Profile
                </a>
              )}
                <p className="user-score">Score: {user.score ? user.score.toFixed(2) : 'N/A'}
                </p>
                </div>
        ))}
        </div>
      )}
    </div>
  </div>
  );
}

export default Search;