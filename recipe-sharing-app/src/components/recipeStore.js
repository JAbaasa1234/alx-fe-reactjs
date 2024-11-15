import { create } from 'zustand';

const useRecipeStore = create(set => ({
   recipes: [],
   filteredRecipes: [],
   favorites: [],
   recommendations: [],
   searchTerm: '',

   setRecipes: (recipes) => 
      set(() => ({
         recipes,
         filteredRecipes: recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes('')
         ),
      })),

   setSearchTerm: (term) =>
      set((state) => {
         const filtered = state.recipes.filter((recipe) => 
            recipe.title.toLowerCase().includes(term.toLowerCase())
         );
         return { searchTerm: term, filteredRecipes: filtered };
      }),

   addRecipe: (recipe) =>
      set((state) => ({
         recipes: [...state.recipes, recipe],
         filteredRecipes: [...state.recipes, recipe].filter((r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
         ),
      })),

   deleteRecipe: (id) =>
      set((state) => {
         const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
         return {
            recipes: updatedRecipes,
            filteredRecipes: updatedRecipes.filter((recipe) =>
               recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
         };
      }),
   
   updateRecipe: (updatedRecipe) =>
      set((state) => {
         const updatedRecipes = state.recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe 
         );
         return {
            recipes: updatedRecipes,
            filteredRecipes: updatedRecipes.filter((recipe) =>
               recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
         };
      }),

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

   // Generate recommendations based on favorites   
   generateRecommendations: () =>
      set((state) => {
         const recommended = state.recipes.filter(
           (recipe) =>
             state.favorites.includes(recipe.id) &&
             Math.random() > 0.5 // Simple mock logic for recommendations
         );
         return { recommendations: recommended };
      }),
}));

export default useRecipeStore;