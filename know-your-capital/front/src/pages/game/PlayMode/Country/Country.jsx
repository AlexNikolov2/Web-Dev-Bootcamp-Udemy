import { Result } from "./Result";
import './Country.css'
import countryFlag from '../../../../assets/syria.webp'
import TextField from "@mui/material/TextField";


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
                    variant="standard" sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'var(--secondary)' },
                            '&:hover fieldset': { borderColor: 'var(--secondary)' },
                            '&.Mui-focused fieldset': { borderColor: 'var(--secondary)' }
                        },
                        '& .MuiInputLabel-root': { color: 'var(--secondary)' },
                        '& .MuiInputLabel-root.Mui-focused': { color: 'var(--secondary)' },
                        '& .MuiInput-underline:before': { borderBottomColor: 'var(--secondary)' },
                        '& .MuiInput-underline:hover:before': { borderBottomColor: 'var(--secondary)' },
                        '& .MuiInput-underline:after': { borderBottomColor: 'var(--secondary)' },
                        'input': { color: 'var(--secondary)' },
                    }}
                    fullWidth />
                <button onClick={handleAnswer}>Submit</button>
            </section>
        </section>
    )
}