export function Login() {
  return (
    <section className="form login">
      <form action="">
        <h2>Welcome back</h2>
        <section className="field username">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter your username..." />
        </section>
        <section className="field password">
          <label htmlFor="password">Pasword</label>
          <input type="password" placeholder="Enter your password" />
        </section>
        <button>Log in!</button>
      </form>
    </section>
  );
}
