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
        'User-Agent': 'GitHub-User-Search-App',
    },
});

export const searchGitHubUsers = async (usernameQuery, locationQuery, minReposQuery, page = 1,
     perPage =30) => {
    try {

        let fullQuery = usernameQuery;

        if (locationQuery) {
            fullQuery =+ ` location:${locationQuery}`;
        }

        if (minReposQuery && parseInt(minReposQuery, 10) > 0) {
            fullQuery += ` repos:.${minReposQuery}`;
            
        }

        const response = await githubApi.get('/search/users', {
            params: {
                q: query,
                page: page,
                per_page: perPage,
            },
        });

        return response.data;
    } catch (error) {
    
    console.error('Error searching GitHub users:', error); // Log the full error object
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);

      // Specifically handle rate limit errors (403) or invalid query errors (422)
      if (error.response.status === 403 && error.response.headers['x-ratelimit-remaining'] === '0') {
          throw new Error("GitHub API rate limit exceeded. Please try again later or provide a token.");
      }
      if (error.response.status === 422) {
          throw new Error("Invalid search query. Please check your inputs.");
      }
    } else {
        console.error('No response from server:', error.message);
    }
    // --- END CORRECTED LINES ---
    throw error; // Re-throw the error for the component to handle
  }
};