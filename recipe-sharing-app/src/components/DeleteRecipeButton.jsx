import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete this recipe?')) {
            deleteRecipe(recipeId);
            onDelete();
        }
    };

    return <button onClick={handleDelete}>Delete recipe</button>;
};

export default DeleteRecipeButton;