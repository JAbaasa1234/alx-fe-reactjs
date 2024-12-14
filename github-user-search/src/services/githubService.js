import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async ({username, location, minRepos}) => {
    let query = "";

    if (username) query += `${username}`;
    if (location) query += `location:${location}`;
    if (minRepos) query += `repos:>${minRepos}`;

    try {
        const response = await axios.get(`${BASE_URL}?q=${query.trim()}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

export default fetchAdvancedUserData;