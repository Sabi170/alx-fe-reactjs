import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],

    searchTerm: "",

    fileteredRecipes:[],

    addRecipe: (recipe) =>
        set((state) => ({
            recipes: [...state.recipes, recipe],
            fileteredRecipes: [...state.recipes, recipe],
        })),

        deleteRecipe: (id) =>
            set((state) => {
                const updated = state.recipes.filter((r) => r.id !== id);
                return {
                    recipes: updated,
                    filteredRecipes: updated.filter((recipe) =>
                        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
                };
            }),

            setSearchTerm: (term) =>
                set((state) => {
                    const filtered = state.recipes.filter((recipe) => 
                        recipe.title.toLowerCase().includes(term.toLowerCase())
                );
                return { searchTerm: term, filteredRecipes: filtered };
                }),
            }));

export default useRecipeStore;