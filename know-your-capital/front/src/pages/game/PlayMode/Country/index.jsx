import { Result } from "./Result";
import './style.css';
import TextField from "@mui/material/TextField";
import { textFieldStyling } from "../../../../utils/textfield_styling";
import { useState, useEffect } from "react";
import { getCountryInfo } from "../../../../services/gameService";
import { useParams, useNavigate } from "react-router-dom";

export const Country = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
        setIsCorrect(capital.toLowerCase() === country.capital?.toLowerCase());

        // Navigate to the next country after a delay
        setTimeout(() => {
            const nextCountryId = country.nextCountryId; // Assuming the backend provides the next country's ID
            if (nextCountryId) {
                navigate(`/game/play-mode/${nextCountryId}`);
                setCapital("");
                setIsFilled(false);
            } else {
                console.log("End of the game!");
            }
        }, 2000);
    };

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