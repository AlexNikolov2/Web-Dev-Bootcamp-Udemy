import { TextField } from "@mui/material";

export function Register() {
  return (
    <section className="form register">
      <form action="">
        <h2>Register</h2>
        <section className="field username">
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            fullWidth
          />
        </section>
        <section className="field email">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
          />
        </section>
        <section className="field password">
          <TextField
            id="standard-basic"
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

