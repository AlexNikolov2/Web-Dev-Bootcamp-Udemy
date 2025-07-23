import { Result } from "./Result";
import "./style.css";
import TextField from "@mui/material/TextField";
import { textFieldStyling } from "../../../../utils/textfield_styling";
import { useState, useEffect } from "react";
import { getCountryInfo } from "../../../../services/gameService";
import { useParams, useNavigate } from "react-router-dom";
import { Modal, Box, Typography } from "@mui/material";
import { font, modalStyle } from "./ModalStyle";
import { ChronometerDisplay } from "../Timer/index";
import { useTimer } from "../../../../contexts/TimerContext";

export const Country = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { stopTimer } = useTimer();
  const [country, setCountry] = useState({});
  const [capital, setCapital] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [open, setOpen] = useState(false);

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

    setTimeout(() => {
      const nextCountryId = country.nextCountryId;
      if (nextCountryId) {
        navigate(`/game/play-mode/${nextCountryId}`);
        setCapital("");
        setIsFilled(false);
      } else {
        console.log("End of the game!");
        stopTimer();
      }
    }, 3000);
  };

  const handleStopModal = () => setOpen(true);
  const handleClose = () => {
    //function to end time count and save game
    setOpen(false)
  };

  const confirmStop = () => {
    stopTimer(); // Stop the timer when user confirms stopping the game
    setOpen(false);
    navigate("/");
  };



  return (
    <section className="play-mode" id="play-mode">
      {isFilled && (
        <Result className="result" isCorrect={isCorrect}>
          {isCorrect
            ? "Correct answer"
            : `Correct answer is: ${country.capital}`}
        </Result>
      )}
      <section className="country">
        {country.flag && (
          <img src={country.flag} alt={`${country.country} Flag`} />
        )}
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
      <ChronometerDisplay />
      <button className="red" onClick={handleStopModal}>
        Stop Game
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2, fontFamily: font, textAlign: "center" }}
          >
            End Game
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontFamily: font,
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Are you sure you want to stop the game?
          </Typography>
          <section className="buttons">
            <button onClick={confirmStop}>Yes</button>
            <button onClick={handleClose}>No</button>
          </section>
        </Box>
      </Modal>
    </section>
  );
};
