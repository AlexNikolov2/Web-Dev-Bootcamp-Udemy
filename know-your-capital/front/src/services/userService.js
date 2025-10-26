import axios from "axios";

const API_URL = "http://localhost:5000/user";

export const getUser = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

export const editUser = async (formData, userId) => {
  const data = {
    username: formData.username,
    email: formData.email,
  };

  if (formData.image && formData.image instanceof File) {
    const base64Image = await convertToBase64(formData.image);
    data.image = base64Image;
  }

  const response = await axios.put(`${API_URL}/${userId}/edit`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
