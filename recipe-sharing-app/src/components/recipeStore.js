import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Pasta",
      description: "Delicious Italian pasta with tomato sauce.",
    },
    {
      id: 2,
      title: "Salad",
      description: "Fresh mixed green salad with vinaigrette.",
    },
  ],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe }
          : recipe
      ),
    })),
}));

export default useRecipeStore;
