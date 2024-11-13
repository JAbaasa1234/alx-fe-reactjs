import { Link } from 'react-router-dom';
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div>
            <h2>Recipe List</h2>
            {recipes.length === 0 ? (
                <p>No recipes added yet.</p>
            ) : (
                recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <h3>{recipe.title}</h3>
                        </Link>
                        <p>{recipe.description}</p>
                    </div>    
                ))
            )}
        </div>
    );
};

export default RecipeList;