import axios from 'axios';

// Get the GitHub token from environment variables
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

// Create an Axios instance with base URL and authorization header
const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        // If a token is available, include it for higher rate limits
        // Note: 'token ' (with a space) is crucial for the Authorization header
        Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : undefined,
    },
});

export const fetchUserData = async (username) => {
    try {
        // GitHub API endpoint for user search: https://api.github.com/users/{username}
        const response = await githubApi.get(`/user/${username}`);
        return response.data; // Return the user data
    } catch (error) {
        console.error('Error fetching user data:', error.response ? error.response.data : error.message);
        throw error; // Re-throw the error for the component to handle
    }
};