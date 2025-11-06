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

export const getCountryInfo = async (gameId, countryId) => {
  try {
    const response = await axios.get(
      `${API_URL}/games/${gameId}/countries/${countryId}`
    );
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching country information:", error);
    throw error;
  }
};

export const searchCountry = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { query },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error searching for country or capital:", error);
    throw error;
  }
};

export const createNewGame = async (gameData) => {
  try {
    const response = await axios.post(`${API_URL}/games`, { game: gameData });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating new game:", error);
    throw error;
  }
};

export const saveGame = async (gameData) => {
  try {
    console.log("saveGame - Sending gameData:", gameData);
    const response = await axios.post(`${API_URL}/games`, { game: gameData });
    console.log("saveGame - Response data from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving game:", error);
    throw error;
  }
};

export const getLastGameByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    console.log("Response data:", response.data);
    return response.data.lastGame;
  } catch (error) {
    console.error("Error fetching last game by user ID:", error);
    throw error;
  }
};

export const getTopGames = async () => {
  try {
    const response = await axios.get(`${API_URL}/top`);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching top games:", error);
    throw error;
  }
};
