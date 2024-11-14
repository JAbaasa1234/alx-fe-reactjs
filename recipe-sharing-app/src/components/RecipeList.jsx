import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import useRecipeStore from "./recipeStore";
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const [editingRecipeId, setEditingRecipeId] = useState(null);

    const handleEditClick = (recipeId) => {
        setEditingRecipeId(recipeId);
    };

    const handleEditCancel = () => {
        setEditingRecipeId(null);
    };


    return (
        <div>
            <h2>Recipe List</h2>
            {filteredRecipes.length >0 ? (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
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