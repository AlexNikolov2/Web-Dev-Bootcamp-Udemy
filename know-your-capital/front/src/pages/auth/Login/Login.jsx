import TextField from "@mui/material/TextField";

export function Login() {
  return (
    <section className="form login">
      <form action="">
        <h2>Welcome back</h2>
        <section className="field username">
          <TextField
            id="standard-basic"
            label="Username"
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
        <button>Log in!</button>
      </form>
    </section>
  );
}
