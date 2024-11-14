import { create } from 'zustand';

const useRecipeStore = create(set => ({
   recipes: [],
   filteredRecipes: [],
   searchTerm: '',

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
}));

export default useRecipeStore;