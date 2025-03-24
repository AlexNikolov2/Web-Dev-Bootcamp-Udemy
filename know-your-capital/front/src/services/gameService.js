import axios from 'axios';

const API_URL = 'http://localhost:5000/game';

export const getCountryInfo = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/play-mode/${id}`);
        console.log("Response data:", response.data); // Log the response data
        return response.data;
    } catch (error) {
        console.error("Error fetching country information:", error);
        throw error;
    }
};