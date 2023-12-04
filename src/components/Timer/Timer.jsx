import { useEffect, useState } from 'react';
import './Timer.css';

function Timer({ gameIsOver, timeLeft }) {
  const [time, setTime] = useState(timeLeft);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const displayTime = (num) => {
    return num.toString().padStart(2, '0');
  };

  useEffect(() => {
    if (!gameIsOver) {
      setTimeout(() => {
        setTime(time - 1);
        setMinutes(Math.floor(time / 60));
        setSeconds(parseFloat(time % 60));
      }, 1000);
    }
  });
  return (
    <div id="timer">
      {displayTime(minutes)}:{displayTime(seconds)}
    </div>
  );
}

export default Timer;
