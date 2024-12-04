import React, { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !ingredients || !steps) {
            setError("All fields are required.");
            return;
        }

        const ingredientList = ingredients.split("\n").map((item) => item.trim());
        if (ingredientList.length < 2) {
            setError("Please provide at least two ingredients.");
            return;
        }

        setError("");

        const newRecipe = {
            title,
            ingredients: ingredientList,
            steps: steps.split("\n").map((item) => item.trim()),
        };

        console.log("New Recipe Submitted:", newRecipe);

        setTitle("");
        setIngredients("");
        setSteps("");
    };

    return (
        <div className="p-8 max-w-2xl mx-auto bg-white rounded shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>
            {error && (
                <div className="text-red-600 bg-red-100 border border-red-300 p-4 rounded mb-4">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter recipe title"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                        placeholder="Enter each ingredient on a new line"
                    ></textarea>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Preparation Steps (one per line)</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="7"
                        placeholder="Enter each step on a new line"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded font-bold hover:bg-blue-600 shadow-lg transition duration-200"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;