export const Country = () => {
    let isCorrect = true;

    return (
        <section className="play-mode" id="play-mode">
            <section className="result">
                {isCorrect ? "Correct answer" : "Incorrect answer!"}
            </section>
            <section className="country">
                {/*<img src="flag.jpg" alt="Country Flag" />*/}
                <h2>Country Name</h2>
                <input type="text" placeholder="Type the country capital" />
            </section>
        </section>
    )
}