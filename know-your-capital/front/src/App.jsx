import "./App.css";

import { HeaderComponent } from "./components/Header/Header";
import { FooterComponent } from "./components/Footer/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
        <section className="title">
          <h1>Know The Capital</h1>
          <p>Learn and Know the capitals of all the countries in the world!</p>
        </section>
        <section className="buttons">
          <Link to="/game/play-mode">Play Mode - Guess All Capitals</Link>
          <Link to="/game/learn-mode">Learn Mode - Learn The Capitals</Link>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
