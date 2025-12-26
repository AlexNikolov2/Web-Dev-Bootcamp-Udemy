import { getUser } from "../../../services/userService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLastGameByUserId } from "../../../services/userService";
import { formatTime } from "../../game/PlayMode/Timer/utils";
import "../style.css";

export const ForeignUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [latestGame, setLatestGame] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(id);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const fetchLastGame = async () => {
      try {
        const game = await getLastGameByUserId(id);
        console.log(game);

        setLatestGame(game);
      } catch (error) {
        console.error("Error fetching latest game:", error);
      }
    };

    fetchUserData();
    fetchLastGame();
  }, [id]);

  return (
    <section className="user-wrap">
      <section className="user-title-wrap">
        <h2>{user ? user.username : "Loading..."}</h2>
        {user && <img src={user.image} alt="" />}
      </section>
      <section className="games-summary-wrap">
        <p>Your latest game</p>
        <section className="latest-game">
          <section className="lg-result">
            <p>Result</p>
            <p className="stat">
              {latestGame ? `${latestGame.correctCountries}/5` : "Loading..."}
            </p>
          </section>
          <section className="lg-time">
            <p>Time</p>
            <p className="stat">
              {latestGame
                ? formatTime(latestGame.timeTaken * 1000)
                : "Loading..."}{" "}
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};
