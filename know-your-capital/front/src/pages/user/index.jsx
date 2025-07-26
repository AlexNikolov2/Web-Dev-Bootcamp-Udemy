import "./style.css";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function User() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const redirectToEdit = () => {
    navigate(`/user/${user._id}/edit`);
  }

  useEffect(() => {
    if (!user) {
      window.location.href = "/auth/login";
    }
  }, [user]);




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
        <button className="edit-profile-btn" onClick={redirectToEdit}>Edit Profile</button>
        <button className="change-plan-btn">Change plan</button>
      </section>
    </section>
  );
}
