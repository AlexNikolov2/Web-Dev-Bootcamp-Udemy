export function Register() {
  return (
    <section className="form register">
      <form action="">
        <h2>Register</h2>
        <section className="field username">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter your username..." />
        </section>
        <section className="field username">
          <label htmlFor="username">Email</label>
          <input type="text" placeholder="Enter your email..." />
        </section>
        <section className="field password">
          <label htmlFor="password">Pasword</label>
          <input type="password" placeholder="Enter your password" />
        </section>
        <button>Sign up!</button>
      </form>
    </section>
  );
}
