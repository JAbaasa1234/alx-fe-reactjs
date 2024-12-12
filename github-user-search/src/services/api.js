import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_API_URL,
});

export const fetchUser = (username) => api.get(`/users/${username}`);