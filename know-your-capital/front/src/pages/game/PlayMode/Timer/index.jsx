import { useState, useEffect } from "react";
import { useTimer } from "../../../../contexts/TimerContext";
import { formatTime } from "../Timer/utils.js";

export const ChronometerDisplay = () => {
  const [elapsed, setElapsed] = useState(0);
  const { startTime, isTimerActive } = useTimer();

  useEffect(() => {
    if (!isTimerActive || !startTime) {
      setElapsed(0);
      return;
    }

    const interval = setInterval(() => {
      setElapsed(Date.now() - startTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, isTimerActive]);

  if (!isTimerActive) {
    return null;
  }

  return (
    <div className="chronometer-display">
      <span>{formatTime(elapsed)}</span>
    </div>
  );
};
