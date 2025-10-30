export function GameCompletion(correctCountries, totalCountries, timeTaken) {
  return (
    <section className="game-completion">
      {correctCountries === totalCountries ? (
        <>
          <h2>Congratulations! You&apos;ve matched all the capitals!</h2>
          <span>Time taken: {timeTaken}</span>
        </>
      ) : (
        <h2>
          Game Over! You answered {correctCountries} out of {totalCountries}{" "}
          correctly.
        </h2>
      )}
    </section>
  );
}
