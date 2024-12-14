import axios from 'axios';

const API_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
    if (!username) throw new Error("Username is required");
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
};

export default fetchUserData;