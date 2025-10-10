# Recipe Sharing Platform

## Project Overview

This project is a Recipe Sharing Platform built using React and styled with Tailwind CSS. It allows users to browse a list of recipes, view detailed information for each recipe, and submit new recipes. The platform focuses on creating a responsive and visually appealing user experience.

## Learning Objectives Achieved (or In Progress)

*   **Set Up a React Application with Tailwind CSS:** Successfully created a new React project and configured it to use Tailwind CSS for utility-first styling.
*   **Build and Style a Responsive Home Page:** (Will be completed in next steps)
*   **Create and Style a Recipe Detail Page:** (Will be completed in next steps)
*   **Implement a Responsive Form for Adding New Recipes:** (Will be completed in next steps)

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **PostCSS:** A tool for transforming CSS with JavaScript.
*   **Autoprefixer:** A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.

## Setup and Installation

Follow these steps to get the project up and running on your local machine:

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn

### Installation Steps

1.  **Clone the repository (if applicable) or navigate to your project directory:**
    ```bash
    git clone <your-repo-url> # If starting from a remote repo
    cd recipe-sharing-platform
    ```
    *If you just created the project as instructed, you are already in the `recipe-sharing-platform` directory.*

2.  **Install project dependencies:**
    ```bash
    npm install
    ```

3.  **Install Tailwind CSS and its dependencies:**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

4.  **Initialize Tailwind CSS configuration files:**
    ```bash
    npx tailwindcss init -p
    ```
    (This creates `tailwind.config.js` and `postcss.config.js` in your project root.)

5.  **Configure `tailwind.config.js`:**
    Ensure your `tailwind.config.js` looks like this to scan for Tailwind classes:
    ```javascript
    // tailwind.config.js
    module.exports = {
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      darkMode: false,
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

6.  **Add Tailwind directives to your main CSS file (`src/index.css`):**
    ```css
    /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

7.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:5173/` (or a similar address).

## Usage

(Once you have components, you can describe how users interact. E.g., "Navigate to the home page to see a list of recipes. Click on a recipe card to view details.")

## Author

[Your Name/Alias]