import axios from "axios";

const API_URL = "http://localhost:5000/game";

export const getCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/play-mode`);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const getCountryInfo = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/play-mode/${id}`);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching country information:", error);
    throw error;
  }
};

export const searchCountry = async (query, id) => {
  try {
    const response = await axios.get(`${API_URL}/search/${id}`, {
      params: { query },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error searching for country or capital:", error);
    throw error;
  }
};
