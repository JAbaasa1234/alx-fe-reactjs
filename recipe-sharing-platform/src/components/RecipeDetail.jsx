import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const selectedRecipe = recipeData.find((r) => r.id ===parseInt(id));
        if (selectedRecipe) {
            setRecipe(selectedRecipe);
        }
    }, [id]);

    if(!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <div className='p-8'>
            <h1 className='text-4xl font-bold mb-4'>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className='w-full h-auto rounded-lg mb-6'/>
            <p className='text-lg mb-4'>{recipe.summary}</p>
            <div className='mb-8'>
                <h2 className='text-2xl font-semibold mb-2'>Ingredients</h2>
                <ul className='list-disc pl-6'>
                   {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className='mb-1'>
                        {ingredient}
                    </li>
                   ))} 
                </ul>
            </div>

            <div>
                <h2 className='text-2xl font-semibold mb-2'>Steps</h2>
                <ol className='list-decimal pl-6'>
                    {recipe.steps.map((step, index) => (
                        <li key={index} className='mb-2'>
                            {step}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default RecipeDetail;