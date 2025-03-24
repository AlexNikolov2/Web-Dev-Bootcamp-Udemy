import { Result } from "./Result";
import './style.css'
import countryFlag from '../../../../assets/syria.webp'
import TextField from "@mui/material/TextField";
import { textFieldStyling } from "../../../../utils/textfield_styling";
import { useState, useEffect } from "react";
import { getCountryInfo } from "../../../../services/gameService";

export const Country = () => {
    let id = 1;
    const [country, setCountry] = useState({});
    const [capital, setCapital] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        const fetchCountryInfo = async () => {
            try {
                const country = await getCountryInfo(id);
                setCountry(country);
            } catch (error) {
                console.error("Error fetching country information:", error);
            }
        };
        fetchCountryInfo();
    }, [id]);

    const handleAnswer = (e) => {
        e.preventDefault();
        setIsFilled(true);
        if (capital.toLowerCase() === "damascus") {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    console.log(country);


    return (
        <section className="play-mode" id="play-mode">
            {isFilled && <Result className="result" isCorrect={isCorrect}>
                {isCorrect ? "Correct answer" : "Incorrect answer!"}
            </Result>}
            <section className="country">
                {<img src={countryFlag} alt="Country Flag" />}
                <p>{country.country}</p>
                <TextField id="standard-basic"
                    label="Type the country's capital"
                    variant="standard" sx={textFieldStyling}
                    fullWidth
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                />
                <button onClick={handleAnswer}>Submit</button>
            </section>
        </section>
    )
}