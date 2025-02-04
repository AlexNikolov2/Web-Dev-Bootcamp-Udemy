import { Result } from "./Result";

export const Country = () => {
    let isCorrect = true;

    return (
        <section className="play-mode" id="play-mode">
            <Result className="result" isCorrect={isCorrect}>
                {isCorrect ? "Correct answer" : "Incorrect answer!"}
            </Result>
            <section className="country">
                {/*<img src="flag.jpg" alt="Country Flag" />*/}
                <h2>Country Name</h2>
                <input type="text" placeholder="Type the country capital" />
            </section>
        </section>
    )
}