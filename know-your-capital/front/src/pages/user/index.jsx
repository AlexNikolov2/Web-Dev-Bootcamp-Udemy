import "./style.css";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLastGameByUserId } from "../../services/gameService";

export function User() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [latestGame, setLatestGame] = useState(null);

  const redirectToEdit = () => {
    navigate(`/user/${user._id}/edit`);
  };

  useEffect(() => {
    if (!user) {
      window.location.href = "/auth/login";
    }
    const fetchLastGame = async () => {
      try {
        const game = await getLastGameByUserId(user._id);
        setLatestGame(game);
      } catch (error) {
        console.error("Error fetching latest game:", error);
      }
    };
    fetchLastGame();
  }, [user]);

  console.log(user);

  return (
    <section className="user-wrap">
      <section className="user-title-wrap">
        <h2>{user.username}</h2>
        <img src={user.image} alt="" />
      </section>
      <section className="games-summary-wrap">
        <p>Your latest game</p>
        <section className="latest-game">
          <section className="lg-result">
            <p>Result</p>
            <p className="stat">
              {latestGame ? `${latestGame.score}/5` : "Loading..."}
            </p>
          </section>
          <section className="lg-time">
            <p>Time</p>
            <p className="stat">
              {latestGame ? latestGame.timeTaken : "Loading..."}{" "}
            </p>
          </section>
        </section>
      </section>
      <section className="buttons-wrap user">
        <button className="edit-profile-btn" onClick={redirectToEdit}>
          Edit Profile
        </button>
        <button className="change-plan-btn">Change plan</button>
      </section>
    </section>
  );
}
