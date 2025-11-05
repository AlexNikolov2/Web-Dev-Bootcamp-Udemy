import { useEffect } from "react";
import { useState } from "react";
import { getAllGamesByUserId } from "../../../services/userService";
import { useAuth } from "../../../contexts/AuthContext";
import { formatTime } from "../../game/PlayMode/Timer/utils";
import dayjs from "dayjs";

import "./style.css";

export const AllGames = () => {
  const [games, setGames] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAllGames = async () => {
      const allGames = await getAllGamesByUserId(user._id);
      setGames(allGames);
    };
    fetchAllGames();
  }, [user._id]);

  games.map((game) => console.log(game));

  return (
    <section className="all-games">
      <h2>All Games</h2>
      <ul className="all-games wrap">
        {games.map((game) => (
          <li key={game._id} className="all-games item">
            <section className="all-games item stat date">
              <p>Date</p>
              <p>{dayjs(game.date).format("DD/MM/YYYY")}</p>
            </section>
            <section className="all-games item stat score">
              <p>Score</p>
              <p>{game.correctCountries}/5</p>
            </section>
            <section className="all-games item stat time">
              <p>Time</p>
              <p>{formatTime(game.timeTaken * 1000)}</p>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
};
