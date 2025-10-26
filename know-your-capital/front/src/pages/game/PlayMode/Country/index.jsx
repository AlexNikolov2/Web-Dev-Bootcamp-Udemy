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
import { ResultDisplay } from "../Result";
import { useTimer } from "../../../../contexts/TimerContext";
import { getTotalCountries } from "../../../../utils/getTotalCountries";
import { saveGame } from "../../../../services/gameService";
import { useAuth } from "../../../../contexts/AuthContext";

export const Country = () => {
  const { gameId, countryId } = useParams();
  const navigate = useNavigate();
  const { stopTimer, getElapsedTime } = useTimer();
  const { user } = useAuth();
  const [country, setCountry] = useState({});
  const [capital, setCapital] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [open, setOpen] = useState(false);
  const [correctCountries, setCorrectCountries] = useState(0);
  const [totalCountries, setTotalCountries] = useState(0);

  useEffect(() => {
    const fetchTotalCountries = async () => {
      try {
        const total = await getTotalCountries();
        setTotalCountries(total);
      } catch (error) {
        console.error("Error fetching total countries:", error);
      }
    };
    fetchTotalCountries();
  }, []);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const countryData = await getCountryInfo(gameId, countryId);
        setCountry(countryData);
      } catch (error) {
        console.error("Error fetching country information:", error);
      }
    };
    fetchCountryInfo();
  }, [gameId, countryId]);

  const handleAnswer = (e) => {
    e.preventDefault();
    setIsFilled(true);
    const isAnswerCorrect =
      capital.toLowerCase() === country.capital?.toLowerCase();
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setCorrectCountries(correctCountries + 1);
    }

    setTimeout(() => {
      const nextCountryId = country.nextCountryId;
      if (nextCountryId) {
        navigate(`/games/${gameId}/${nextCountryId}`);
        setCapital("");
        setIsFilled(false);
      } else {
        stopTimer();
      }
    }, 3000);
  };

  const handleStopModal = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const confirmStop = () => {
    stopTimer();
    handleSave();
    setOpen(false);
  };

  const handleSave = () => {
    const elapsedTime = getElapsedTime();

    const gameData = {
      gameId,
      correctCountries,
      timeTaken: elapsedTime,
    };

    if (user && user._id) {
      gameData.userId = user._id;
    }

    saveGame(gameData);

    navigate("/");
  };
  return (
    <section className="game-wrapper" id="game-wrapper">
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
      <ResultDisplay
        correctCountries={correctCountries}
        totalCountries={totalCountries}
      />
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
