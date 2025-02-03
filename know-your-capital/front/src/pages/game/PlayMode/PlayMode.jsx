import { Country } from "./Country/Country";
import "./PlayMode.css";
import { useState } from "react";

export function PlayMode() {
  let [isBannerClicked, setIsBannerClicked] = useState(false);

  const startGame = () => {
    setIsBannerClicked(true);
  }

  return (
    <>

      {isBannerClicked ? <Country /> : (
        <section className="banner" id="banner">
          <h2>Play Mode - Guess All Capitals</h2>
          <p>Start guessing the capitals of all countries!</p>
          <button onClick={startGame}>Start</button>
        </section>
      )}
    </>
  );
}
