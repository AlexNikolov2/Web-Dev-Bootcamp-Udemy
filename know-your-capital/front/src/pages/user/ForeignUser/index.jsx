import { getUser } from "../../../services/userService";
import { useParams } from "react-router-dom";

export const ForeignUser = () => {
  const { id } = useParams();
  const { user } = getUser(id);
  const [latestGame, setLatestGame] = useState(null);

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
