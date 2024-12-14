import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

export const fetchAdvancedUserData = async ({username, location, minRepos}) => {
    let query = [];

    if (username) query.push(`${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);

    const queryString = query.join("+")

    try {
        const response = await axios.get(`${BASE_URL}${queryString}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

export default fetchAdvancedUserData;