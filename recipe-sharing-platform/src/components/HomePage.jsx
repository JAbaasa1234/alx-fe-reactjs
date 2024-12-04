import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeData from "../data.json";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipeData);
    }, []);

    return (
       <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">Our Recipes</h1>
        <Link
            to="/add-recipe"
            className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition duration-200"
        >
            Add Recipe
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
                <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-400 mt-8"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-700">{recipe.summary}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
       </div>
    );
};

export default HomePage;