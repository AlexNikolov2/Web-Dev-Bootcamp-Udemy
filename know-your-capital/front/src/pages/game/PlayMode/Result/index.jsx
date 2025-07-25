export const ResultDisplay = ({ correctCountries, totalCountries }) => {

    return (
        <section className="result-display">
            {correctCountries}/{totalCountries}
        </section>
    );
}