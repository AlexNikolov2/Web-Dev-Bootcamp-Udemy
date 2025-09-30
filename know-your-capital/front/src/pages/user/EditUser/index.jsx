import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Input, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { editUser } from "../../../services/userService";

export const EditUser = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState("");
  const [setError] = useState(null);

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    navigate(`/user/${user._id}`);
  };

  console.log({ username, email, image });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editUser({ email, username, image }, user._id);
      handleClose();
      navigate(`/user/${user._id}`);
    } catch (error) {
      console.error("Edit user failed:", error);
      setError("Edit user failed. Please try again.");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
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
    </Modal>
  );
};
