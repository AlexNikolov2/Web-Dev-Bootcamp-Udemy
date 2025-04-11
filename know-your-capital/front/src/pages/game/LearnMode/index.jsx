import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { textFieldStyling } from "../../../utils/textfield_styling";
import { Capital } from "./Capital";
import { getCountries, searchCountry } from "../../../services/gameService";
import "./style.css";

export function LearnMode() {
  const [searched, setSearched] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [, setCountries] = useState([]);
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

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      try {
        const foundCountry = await searchCountry(searchInput, "dummy-id");
        setCountry(foundCountry);
        console.log(foundCountry);

        setSearchInput("");
        setSearched(true);
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Please enter a valid country or capital name.");
    }
  };

  console.log(country);

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
    <Capital foundCountry={country} searched={setSearched} />
  );
}
