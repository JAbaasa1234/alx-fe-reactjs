import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import useRecipeStore from "./recipeStore";
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const favorites = useRecipeStore((state) => state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    const [editingRecipeId, setEditingRecipeId] = useState(null);

    const handleEditClick = (recipeId) => {
        setEditingRecipeId(recipeId);
    };

    const handleEditCancel = () => {
        setEditingRecipeId(null);
    };

    const handleFavoriteToggle = (repiceId) => {
        if (favorites.includes(repiceId)) {
            removeFavorite(repiceId);
        } else {
            addFavorite(repiceId);
        }
    };


    return (
        <div>
            <h2>Recipe List</h2>
            {filteredRecipes.length >0 ? (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', backgroundColor: favorites.includes(recipe.id) ? '#f9f9ff' : 'white' }}>
                        {editingRecipeId === recipe.id ? (
                            <div>
                                <EditRecipeForm
                                    recipe={recipe}
                                    onCancel={handleEditCancel}
                                />
                                <button onClick={handleEditCancel}>Cancel</button>
                            </div>
                        ) : (
                            <>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <h3>{recipe.title}</h3>
                                </Link>
                                <p>{recipe.description}</p>
                                <button onClick={() => handleEditClick(recipe.id)}>Edit</button>
                                <DeleteRecipeButton recipeId={recipe.id} />
                                <button
                                    onClick={() => handleFavoriteToggle(recipe.id)}
                                    style={{
                                        marginLeft: '10px',
                                        backgroundColor: favorites.includes(recipe.id) ? '#ffccb' : '#f0f0f0',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px' 
                                    }}
                                >
                                    {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
                                </button>
                            </>
                        )}
                    </div>
                ))
            ) : (
                <p>No recipes found!</p>
            )}
        </div>
    );
};

export default RecipeList;