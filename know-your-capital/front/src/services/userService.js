import axios from "axios";

const API_URL = "http://localhost:5000/user";

export const editUser = async (formData, userId) => {
  const response = await axios.put(`${API_URL}/${userId}/edit`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
