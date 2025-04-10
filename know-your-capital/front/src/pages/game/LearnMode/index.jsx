import { useState } from "react";
import { TextField } from "@mui/material";
import { textFieldStyling } from "../../../utils/textfield_styling";
import { Capital } from "./Capital";
import "./style.css";

export function LearnMode() {
  const [searched, setSearched] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
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
    <Capital />
  );
}
