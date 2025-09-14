import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // ✅ Project 0: setRecipes
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes, // initialize filtered list
    })),

  // ✅ Project 1: updateRecipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // ✅ Add recipe
  addRecipe: (recipe) =>
    set((state) => {
      const updated = [...state.recipes, recipe];
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // ✅ Edit recipe (alias for updateRecipe)
  editRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // ✅ Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // ✅ Project 2: Search & filter
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));

export default useRecipeStore;
