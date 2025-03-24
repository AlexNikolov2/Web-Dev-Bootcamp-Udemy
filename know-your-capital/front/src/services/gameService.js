import axios from 'axios';

const API_URL = 'http://localhost:5000/game';

export const getPlayCountry = async (id) => {
    const response = await axios.get(`${API_URL}/play-mode/${id}`);
    return response.data;
};