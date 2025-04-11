import "./style.css";
export function Capital({ foundCountry, searched }) {
  const {
    flag,
    capitalPopulation,
    capitalYearFounded,
    capital,
    country,
    capitalInfo,
  } = foundCountry;

  const backToSearch = () => {
    searched(false);
  };

  return (
    <>
      <section className="capital-wrap">
        <section className="container-left">
          <img src={flag} alt="" />
          <p>Population : {capitalPopulation} </p>
          <p>Founded in : {capitalYearFounded}</p>
        </section>
        <section className="container-right">
          <section className="right-title">
            <h2>{capital}</h2>
            <h3>Capital of {country}</h3>
          </section>
          <p>{capitalInfo}</p>
        </section>
      </section>
      <button onClick={backToSearch}>Go Back</button>
    </>
  );
}
