import axios from "axios";

const API_URL = "http://localhost:5000/user";

export const getUser = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

export const editUser = async (formData, userId) => {
  const response = await axios.put(`${API_URL}/${userId}/edit`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
