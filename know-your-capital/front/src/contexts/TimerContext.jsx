import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};

const TimerProvider = ({ children }) => {
  const [startTime, setStartTime] = useState(null);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const startTimer = () => {
    const now = Date.now();
    setStartTime(now);
    setIsTimerActive(true);
    return now;
  };

  const stopTimer = () => {
    setIsTimerActive(false);
    setStartTime(null);
  };

  const resetTimer = () => {
    if (isTimerActive) {
      setStartTime(Date.now());
    }
  };

  const getElapsedTime = () => {
    if (!startTime) {
      return 0;
    }
    return Math.floor((Date.now() - startTime) / 1000); // Return in seconds
  };

  return (
    <TimerContext.Provider
      value={{
        startTime,
        isTimerActive,
        startTimer,
        stopTimer,
        resetTimer,
        getElapsedTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { useTimer, TimerProvider };
