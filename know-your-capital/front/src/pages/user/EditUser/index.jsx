import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const EditUser = () => {
  const { user, edit } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const [, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    navigate(`/user/${user._id}`);
  };

  console.log({ username, email, image });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting edit with:", { email, username, image });
      const result = await edit({ email, username, image });
      console.log("Edit result:", result);
      handleClose();
      navigate(`/user/${user._id}`);
    } catch (error) {
      console.error("Edit user failed:", error);
      setError("Edit user failed. Please try again.");
    }
  };

  return (
    <section className="edit-user-wrap">
      <h2>Edit Profile</h2>
      {error && <p className="error">{error}</p>}
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
