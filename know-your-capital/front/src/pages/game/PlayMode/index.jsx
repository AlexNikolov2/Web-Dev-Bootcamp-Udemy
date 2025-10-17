import { useNavigate } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { getCountries } from "../../../services/gameService";
import { useTimer } from "../../../contexts/TimerContext";

export function PlayMode() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [gameId, setGameId] = useState(null);
  const { startTimer } = useTimer();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await getCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleStart = () => {
    if (countries.length > 0) {
      setGameId(gameId);
      startTimer();
      navigate(`/game/play-mode/${countries[0]._id}`);
    } else {
      console.error("No countries available to start the game.");
    }
  };

  return (
    <section className="play-mode">
      <h2>Play Mode</h2>
      <p>Test your knowledge of world capitals!</p>
      <button onClick={handleStart}>Start</button>
    </section>
  );
}
