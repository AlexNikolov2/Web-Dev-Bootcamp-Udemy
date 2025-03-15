import "./style.css";

export function User() {
  return (
    <section className="user-wrap">
      <section className="user-title-wrap">
        <h2>Your Profile</h2>
      </section>
      <section className="games-summary-wrap">
        <p>Your latest game</p>
        <section className="latest-game">
          <section className="lg-result">
            <p>Result</p>
            <p className="stat">188/195</p>
          </section>
          <section className="lg-time">
            <p>Time</p>
            <p className="stat">17:44</p>
          </section>
        </section>
      </section>
      <section className="buttons-wrap">
        <button className="edit-profile-btn">Edit Profile</button>
        <button className="change-plan-btn">Change plan</button>
      </section>
    </section>
  );
}
