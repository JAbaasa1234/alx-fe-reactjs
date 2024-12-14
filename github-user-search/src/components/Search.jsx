import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";


const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e, setter) => setter(e.target.value);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData([]);

        try {
            const query = { username, location, minRepos };
            const data = await fetchAdvancedUserData(query);
            setUserData(data.items || []);
        } catch (err) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
            <form 
                onSubmit={handleFormSubmit}
                className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6"
            >
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => handleInputChange(e, setUsername)}
                    className="p-2 border rounded w-full md:w-1/4"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => handleInputChange(e, setLocation)}
                    className="p-2 border rounded w-full md:w-1/4"
                />
                <input
                    type="number"
                    placeholder="Min Repositories"
                    value={minRepos}
                    onChange={(e) => handleInputChange(e, setMinRepos)}
                    className="p-2 border rounded w-full md:w-1/4"
                />
                <button 
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {/* Conditional Rendering */}
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Display User List */}
            {userData.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userData.map((user) => (
                        <div 
                            key={user.id}
                            className="p-4 border rounded shadow-md flex flex-col items-center"
                        >
                            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mb-2"/>
                            <h2 className="text-lg font-semibold">{user.login}</h2>
                            <p>Username: {userData.login}</p>
                            {user.location && <p className="text-sm">Location: {user.location}</p>}
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;