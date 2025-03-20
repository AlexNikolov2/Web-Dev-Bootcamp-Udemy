import TextField from "@mui/material/TextField";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login({ email, password });
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <section className="form login">
      <form action="" onSubmit={handleSubmit}>
        <h2>Welcome back</h2>
        {error && <p className="error">{error}</p>}
        <section className="field email">
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            fullWidth
          />
        </section>
        <section className="field password">
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="standard"
            fullWidth
          />
        </section>
        <button>Log in!</button>
      </form>
    </section>
  );
}
