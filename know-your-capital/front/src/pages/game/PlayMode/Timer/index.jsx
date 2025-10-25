import { useState, useEffect } from "react";
import { useTimer } from "../../../../contexts/TimerContext";

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

  const seconds = Math.floor((elapsed / 1000) % 60);
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);

  if (!isTimerActive) {
    return null;
  }

  return (
    <div className="chronometer-display">
      <span>{String(hours).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(minutes).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  );
};
