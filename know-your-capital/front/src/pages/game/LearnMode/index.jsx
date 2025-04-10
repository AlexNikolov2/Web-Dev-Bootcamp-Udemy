import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { textFieldStyling } from "../../../utils/textfield_styling";
import { Capital } from "./Capital";
import { getCountries } from "../../../services/gameService";
import "./style.css";

export function LearnMode() {
  const [searched, setSearched] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await getCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      const foundCountry = countries.find(
        (country) =>
          country.name.toLowerCase() === searchInput.toLowerCase() ||
          country.capital.toLowerCase() === searchInput.toLowerCase()
      );
      if (foundCountry) {
        setCountry(foundCountry);
      } else {
        alert("Country or capital not found.");
      }
      setSearched(true);
    } else {
      alert("Please enter a valid country or capital name.");
    }
  };

  return !searched ? (
    <section className="search-wrap">
      <section className="title">
        <h2>Search & Learn</h2>
        <p>
          Find information about every capital Of each country in the world!
        </p>
      </section>
      <section className="search">
        <TextField
          id="standard-basic"
          label="Type a country, or a country’s capital"
          variant="standard"
          sx={textFieldStyling}
          fullWidth
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </section>
    </section>
  ) : (
    <Capital country={country} />
  );
}
