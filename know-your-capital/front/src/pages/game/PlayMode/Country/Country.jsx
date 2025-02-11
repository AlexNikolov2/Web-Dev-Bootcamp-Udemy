import { Result } from "./Result";
import './Country.css'
import countryFlag from '../../../../assets/syria.webp'
import TextField from "@mui/material/TextField";
import { textFieldStyling } from "../../../../utils/textfield_styling";


export const Country = () => {
    let isCorrect = false;

    const handleAnswer = () => {

    }

    return (
        <section className="play-mode" id="play-mode">
            <Result className="result" isCorrect={isCorrect}>
                {isCorrect ? "Correct answer" : "Incorrect answer!"}
            </Result>
            <section className="country">
                {<img src={countryFlag} alt="Country Flag" />}
                <p>Country Name</p>
                <TextField id="standard-basic"
                    label="Type the country's capital"
                    variant="standard" sx={textFieldStyling}
                    fullWidth />
                <button onClick={handleAnswer}>Submit</button>
            </section>
        </section>
    )
}