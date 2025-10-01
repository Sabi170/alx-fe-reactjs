import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service


function Search() {
    const [username, setUsername] = useState(''); // State to hold the input value
    const [userData, setUserData] = useState(null); // State to indicate loading status
    const [loading, setLoading] = useState(false); // State to indicate loading status
    const [error, setError] = useState(null); // State to store error messages

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behaviour

        if (!username.trim()) { // Don't search for empty username
            setError("Please enter a username.");
            setUserData(null);
            return;
        }
    
        setLoading(true); // Set loading to true before API call
        setError(null); // Clear previous errors
        setUserData(null); // Clear previous user data

        try {
            const data = await fetchUserData(username);
            setUserData(data); // Store the fetched data
        } catch (err) {
            setError("Looks like we cant find the user."); // Set error message
            console.error(err); // Log full error for debugging
        } finally {
            setLoading(false); // Set loading to false after API call (success or failure)
        }
    };

    return (
        <div className="search-container p-4">
            <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-2">
                <input
                type="text"
                value={username}
                onChange={handleInputChange}
                placeholder="Enter GitHub username"
                className="p-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white 
                    font-semibold rounded-md shadow-md hover:bg-blue-700
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                    disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
            </form>

            <div className="results-area mt-8">
                {loading && <p className ="text-blue-500 text-lg">Loading...</p>}
                {error && <p className="text-red-500 text-lg">{error}</p>}

                {userData && (
                    <div className="user-profile bg-white shadow-lg rounded-lg p-6 flex
                    flex-col items-center max-w-sm mx-auto">

                        <img
                        src={userData.avatar_url}
                        alt={`${userData.login}'s avatar`}
                        className="w-24 h-24 rounded-full mb-4 border-4 border-blue-300"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {userData.name || userData.login}
                        </h2>
                        <p className="text-gray-600 mb-4">@{userData.login}</p>
                        <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopner noreferrer"
                        className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md
                        hover:bg-green-700 transition duration-300 ease-in-out"
                        >
                            View Profile
                        </a>
                        {userData.bio && <p className="text-gray-700 mt-4 text-center">
                            {userDataa.bio}</p>}
                        {userData.location && <p className="text-gray-500 mt-2">Location: 
                            {userData.location}</p>}
                    <div className="flex justify-around w-full mt-4">
                        <div className="text-center">
                            <p className="font-bold text-gray-800">{userData.followers}</p>
                            <p className="text-sm text-gray-500">Followers</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-800">{userData.following}</p>
                            <p className="text-sm text-gray-500">Following</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-800">{userData.following}</p>
                            <p className="text-sm text-gray-500">Repositories</p>
                    </div>
                 </div>
            </div>
            )}
        </div>
        </div>
    );
}
export default Search;