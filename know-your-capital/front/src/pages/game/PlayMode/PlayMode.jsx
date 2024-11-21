import "./PlayMode.css";
import { useState } from "react";

export function PlayMode() {
  let isCorrect = true
  let [isBannerClicked, setIsBannerClicked] = useState(false);

  const startGame = () => {
    setIsBannerClicked(true);
  }

  return (
    <>

      {isBannerClicked ? null : (
        <section className="banner" id="banner">
          <h2>Play Mode - Guess All Capitals</h2>
          <p>Start guessing the capitals of all countries!</p>
          <button onClick={startGame}>Start</button>
        </section>
      )}

      {isBannerClicked && (
        <section className="play-mode" id="play-mode">
          <section className="result">
            {isCorrect ? "Correct answer" : "Incorrect answer!"}
          </section>
          <section className="country">
            <img src="flag.jpg" alt="Country Flag" />
            <h2>Country Name</h2>
            <input type="text" placeholder="Type the country capital" />
          </section>
        </section>
      )}
    </>
  );
}
