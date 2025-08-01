import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Pasta",
      description: "Delicious Italian pasta with tomato sauce.",
      ingredients: ["pasta", "tomato", "salt"],
      cookTime: 20,
    },
    {
      id: 2,
      title: "Salad",
      description: "Fresh mixed green salad with vinaigrette.",
      ingredients: ["lettuce", "tomato", "olive oil"],
      cookTime: 10,
    },
    {
      id: 3,
      title: "Pizza",
      description: "Cheesy pizza with pepperoni and olives.",
      ingredients: ["dough", "cheese", "pepperoni", "olives"],
      cookTime: 25,
    },
    {
      id: 4,
      title: "Soup",
      description: "Hot chicken soup with noodles.",
      ingredients: ["chicken", "noodles", "carrot", "salt"],
      cookTime: 30,
    },
  ],

  filteredRecipes: [],
  searchTerm: "",
  ingredientFilter: "",
  cookTimeFilter: 0,

  setSearchTerm: (term) => set({ searchTerm: term }),
  setIngredientFilter: (term) => set({ ingredientFilter: term }),
  setCookTimeFilter: (time) => set({ cookTimeFilter: time }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const matchesTitle = recipe.title
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase());

        const matchesIngredient = state.ingredientFilter
          ? recipe.ingredients?.some((ingredient) =>
              ingredient
                .toLowerCase()
                .includes(state.ingredientFilter.toLowerCase())
            )
          : true;

        const matchesTime =
          state.cookTimeFilter > 0
            ? recipe.cookTime <= state.cookTimeFilter
            : true;

        return matchesTitle && matchesIngredient && matchesTime;
      }),
    })),

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

  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
