import React, { useMemo } from "react";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const favorites = useRecipeStore((state) => state.favorites);

    const favoriteRecipes = useMemo(() => {
        return recipes.filter((recipe) => favorites.includes(recipe.id));
    }, [recipes, favorites]);

    return (
        <div>
            <h2>My Favorites</h2>
            {favoriteRecipes.length > 0 ? (
                favoriteRecipes.map((recipe) => (
                  <div key={recipe.id} style={{ marginBottom: '10px' }}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                  </div>  
                ))
            ) : (
                <p>No favorites yet. Start adding some!</p>
            )}
        </div>
    );
};

export default FavoritesList;