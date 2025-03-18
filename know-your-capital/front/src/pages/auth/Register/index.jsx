import { TextField } from "@mui/material";

export function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(username, email, password);
  }


  return (
    <section className="form register">
      <form action="" onSubmit={handleSubmit}>
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

