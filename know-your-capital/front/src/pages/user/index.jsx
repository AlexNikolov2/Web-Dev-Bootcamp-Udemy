import "./style.css";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

export function User() {
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      window.location.href = "/auth/login";
    }
  }, [user]);

  const redirectToEdit = () => {
    window.location.href = `/user/${user._id}/edit`;
  }


  return (
    <section className="user-wrap">
      <section className="user-title-wrap">
        <h2>{user.username}</h2>
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
      <section className="buttons-wrap user">
        <button className="edit-profile-btn" onClick={redirectToEdit()}>Edit Profile</button>
        <button className="change-plan-btn">Change plan</button>
      </section>
    </section>
  );
}
