import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Input } from "@mui/material";
import "./styles.css";

export const EditUser = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("image", image ?? "");
  };

  return (
    <section className="edit-user-wrap">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          fullWidth
          autoComplete="username"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          fullWidth
          autoComplete="email"
        />
        <Input
          onChange={(e) => setImage(e.target.files[0])}
          placeholder="Profile Image"
          type="file"
          fullWidth
        />
        <button type="submit" onClick={handleSubmit}>
          Save Changes
        </button>
      </form>
    </section>
  );
};
