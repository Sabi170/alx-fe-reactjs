import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
          path="/"
          element={
            <>
            <AddRecipeForm />
            <RecipeList />
            </>
          }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;