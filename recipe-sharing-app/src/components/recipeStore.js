import { create } from "zustand";

export const useRecipeStore = create((set) => ({
    recipes: [],
    adRecipe: (newRecipe) =>
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
}));