import axios from 'axios';

const API_URL = 'http://localhost:5000/auth'; // Ensure this URL is correct

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

