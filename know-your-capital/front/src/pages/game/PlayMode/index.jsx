import { useNavigate } from "react-router-dom";
import "./style.css";

export function PlayMode() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/game/play-mode/1"); // Navigate to the first country (id = 1)
  };

  return (
    <section className="play-mode">
      <h2>Play Mode</h2>
      <p>Test your knowledge of world capitals!</p>
      <button onClick={handleStart}>Start</button>
    </section>
  );
}
