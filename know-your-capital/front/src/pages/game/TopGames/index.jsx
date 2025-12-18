import { useEffect, useState } from "react";
import { formatTime } from "../../game/PlayMode/Timer/utils";
import dayjs from "dayjs";
import { getTopGames } from "../../../services/gameService";
import { Link } from "react-router-dom";

import "./style.css";

export const TopGames = () => {
  const [topGames, setTopGames] = useState([]);

  const getImageDisplayName = (user) => {
    if (!user) return "Guest User";
    if (user.image && user.image.data) {
      return `${user.username}'s Image`;
    }
    return user.username;
  };

  const getImageDisplayValue = (user) => {
    if (!user) return null;
    if (user.image) {
      return user.image;
    }
    return null;
  };

  useEffect(() => {
    const fetchTopGames = async () => {
      try {
        const response = await getTopGames();
        setTopGames(response);
      } catch (error) {
        console.error("Error fetching top games:", error);
      }
    };

    fetchTopGames();
  }, []);

  return (
    <section className="top-games">
      <h2>Top Games</h2>
      <ul className="top-games wrap">
        {topGames.map((game) => {
          const userImage = getImageDisplayValue(game.userId);
          const userDisplay = getImageDisplayName(game.userId);

          console.log(game.userId);

          return (
            <li key={game._id} className="top-games item">
              {game.userId?._id ? (
                <section className="top-games item stat user">
                  <p>User</p>
                  {userImage ? (
                    <Link to={`/user/${game.userId._id}`}>
                      <img
                        src={userImage}
                        alt={userDisplay}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </Link>
                  ) : (
                    <Link to={`/user/${game.userId._id}`}>
                      <p>{userDisplay}</p>
                    </Link>
                  )}
                </section>
              ) : (
                <section className="top-games item stat user">
                  <p>User</p>
                  <p>{userDisplay}</p>
                </section>
              )}
              <section className="top-games item stat date">
                <p>Date</p>
                <p>{dayjs(game.date).format("DD/MM/YYYY")}</p>
              </section>
              <section className="top-games item stat score">
                <p>Score</p>
                <p>{game.correctCountries}/5</p>
              </section>
              <section className="top-games item stat time">
                <p>Time</p>
                <p>{formatTime(game.timeTaken * 1000)}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
