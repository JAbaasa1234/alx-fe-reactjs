import useRecipeStore from "./recipeStore";
import { useEffect } from "react";

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);
    const generateRecommendations = useRecipeStore(
        (state) => state.generateRecommendations
    );

    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    return (
        <div>
            <h2>Recommended for You</h2>
            {recommendations.length > 0 ? (
                recommendations.map((recipe) => (
                    <div key={recipe.id} style={{ marginBottom: '10px' }}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No recommendations yet. Add some favorites to get started!</p>
            )}
        </div>
    );
};

export default RecommendationsList;