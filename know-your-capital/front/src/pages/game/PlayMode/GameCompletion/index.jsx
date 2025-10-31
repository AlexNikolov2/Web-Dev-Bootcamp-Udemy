import { formatTime } from "../Timer/utils";
import { useNavigate } from "react-router";

export function GameCompletion({
  correctCountries,
  totalCountries,
  timeTaken,
}) {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/games/play-mode");
  };

  const handleGoToMainMenu = () => {
    navigate("/");
  };

  return (
    <section className="game-completion">
      {correctCountries === totalCountries ? (
        <>
          <h2>Congratulations! You&apos;ve matched all the capitals!</h2>
          <span>Time taken: {formatTime(timeTaken * 1000)}</span>
          <section className="buttons">
            <button onClick={handleTryAgain}>Try Again</button>
            <button onClick={handleGoToMainMenu}>Go to Main Menu</button>
          </section>
        </>
      ) : (
        <>
          <h2>
            Game Over! You answered {correctCountries} out of {totalCountries}{" "}
            countries correctly.
          </h2>
          <span>Time taken: {formatTime(timeTaken * 1000)}</span>
          <section className="buttons">
            <button onClick={handleTryAgain}>Try Again</button>
            <button onClick={handleGoToMainMenu}>Go to Main Menu</button>
          </section>
        </>
      )}
    </section>
  );
}
