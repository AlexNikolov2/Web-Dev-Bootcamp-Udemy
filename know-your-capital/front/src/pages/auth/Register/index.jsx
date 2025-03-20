import { Input, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { register } from "../../../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await register({ username, email, password });
      console.log('Registration successful:', response);
      setError(null); // Clear any previous errors
      setSuccess('Registration successful!'); // Set success message
      await login({ email, password }); // Log in the user
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
      setSuccess(null); // Clear any previous success message
    }
  }

  return (
    <section className="form register">
      <form action="" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <section className="field username">
          <Input
            id="username"
            name="username"
            placeholder="Username"
            variant="standard"
            fullWidth
            autoComplete="username"
          />
        </section>
        <section className="field email">
          <Input
            id="email"
            name="email"
            placeholder="Email"
            variant="standard"
            fullWidth
            autoComplete="email"
          />
        </section>
        <section className="field password">
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="new-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </section>
        <button>Sign up!</button>
      </form>
    </section>
  );
}

