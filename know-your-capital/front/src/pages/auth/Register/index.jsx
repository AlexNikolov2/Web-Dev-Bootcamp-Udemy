import { TextField } from "@mui/material";
import { register } from "../../../services/authService"; // Import the register function

export function Register() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await register({ username, email, password });
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <section className="form register">
      <form action="" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <section className="field username">
          <TextField
            id="standard-basic"
            name="username"
            label="Username"
            variant="standard"
            fullWidth
          />
        </section>
        <section className="field email">
          <TextField
            id="standard-basic"
            name="email"
            label="Email"
            variant="standard"
            fullWidth
          />
        </section>
        <section className="field password">
          <TextField
            id="standard-basic"
            name="password"
            label="Password"
            variant="standard"
            fullWidth
          />
        </section>
        <button>Sign up!</button>
      </form>
    </section>
  );
}

