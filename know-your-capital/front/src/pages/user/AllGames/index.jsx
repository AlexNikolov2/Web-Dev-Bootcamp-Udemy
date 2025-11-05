import { useEffect } from "react";
import { useState } from "react";
import { getAllGamesByUserId } from "../../../services/userService";
import { useAuth } from "../../../contexts/AuthContext";
import { formatTime } from "../../game/PlayMode/Timer/utils";

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

  return (
    <section className="all-games">
      <h2>All Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            Game ID: {game.gameId}, Correct Countries: {game.correctCountries},
            Time Taken: {formatTime(game.timeTaken * 1000)}
          </li>
        ))}
      </ul>
    </section>
  );
};
