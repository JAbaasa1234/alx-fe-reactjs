import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearchChange}
            style={{ padding: '8px', width: '100%', marginBottom: '20px' }}
        />
    );
};

export default SearchBar;