import "./App.css";

import { HeaderComponent } from "./components/Header/Header";
import { FooterComponent } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HeaderComponent />
      <section className="title">
        <h1>Know The Capital</h1>
        <p>Learn and Know the capitals of all the countries in the world!</p>
      </section>
      <section className="buttons">
        <a href="/">Play Mode - Guess All Capitals</a>
        <a href="/">Learn Mode - Learn The Capitals</a>
      </section>
      <FooterComponent />
    </>
  );
}

export default App;
