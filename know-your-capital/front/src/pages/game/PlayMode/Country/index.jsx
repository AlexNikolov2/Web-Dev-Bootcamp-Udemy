import { Result } from "./Result";
import './style.css';
import TextField from "@mui/material/TextField";
import { textFieldStyling } from "../../../../utils/textfield_styling";
import { useState, useEffect } from "react";
import { getCountryInfo } from "../../../../services/gameService";
import { useParams } from "react-router-dom";

export const Country = () => {
    const { id } = useParams(); // Get the id from route parameters
    const [country, setCountry] = useState({});
    const [capital, setCapital] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        const fetchCountryInfo = async () => {
            try {
                const countryData = await getCountryInfo(id);
                setCountry(countryData);
            } catch (error) {
                console.error("Error fetching country information:", error);
            }
        };
        fetchCountryInfo();
    }, [id]);

    const handleAnswer = (e) => {
        e.preventDefault();
        setIsFilled(true);
        if (capital.toLowerCase() === country.capital?.toLowerCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    console.log(country);


    return (
        <section className="play-mode" id="play-mode">
            {isFilled && <Result className="result" isCorrect={isCorrect}>
                {isCorrect ? "Correct answer" : "Incorrect answer!"}
            </Result>}
            <section className="country">
                {country.flag && <img src={country.flag} alt={`${country.country} Flag`} />}
                <p>{country.country}</p>
                <TextField
                    id="standard-basic"
                    label="Type the country's capital"
                    variant="standard"
                    sx={textFieldStyling}
                    fullWidth
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                />
                <button onClick={handleAnswer}>Submit</button>
            </section>
        </section>
    );
};