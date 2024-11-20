import "./PlayMode.css";

export function PlayMode() {
  let isCorrect = true
  return (
    <>

      <section>
        <h2>Play Mode - Guess All Capitals</h2>
        <p>Start guessing the capitals of all countries!</p>
        <button>Start</button>
      </section>

      <section className="play-mode">
        <section className="result">
          {isCorrect ? "Correct answer" : "Incorrect answer!"}
        </section>
        <section className="country">
          <img src="flag.jpg" alt="Country Flag" />
          <h2>Country Name</h2>
          <input type="text" placeholder="Type the country capital" />
        </section>
      </section>
    </>
  );
}
