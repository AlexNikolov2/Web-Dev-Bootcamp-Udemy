import { TextField } from "@mui/material";
import { textFieldStyling } from "../../../../utils/textfield_styling";
import './style.css';

export function SearchTab() {
    return (
        <section className="search-wrap">
            <section className="title">
                <h2>Search & Learn</h2>
                <p>Find information about every capital Of each country in the world!</p>
            </section>
            <section className="search">
                <TextField id="standard-basic"
                    label="Type a country, or a country’s capital"
                    variant="standard" sx={textFieldStyling}
                    fullWidth />
                <button className="search-btn">Search</button>
            </section>
        </section>
    );
}