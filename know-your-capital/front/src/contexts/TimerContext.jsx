import { createContext, useContext, useState } from 'react';

const TimerContext = createContext();

const useTimer = () => {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error('useTimer must be used within a TimerProvider');
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

    return (
        <TimerContext.Provider
            value={{
                startTime,
                isTimerActive,
                startTimer,
                stopTimer,
                resetTimer,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};

export { useTimer, TimerProvider };
