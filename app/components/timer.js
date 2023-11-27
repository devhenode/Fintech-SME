'use client'
import { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(300); // 300 seconds = 5 minutes
  const [timerText, setTimerText] = useState('05:00');

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          const minutes = Math.floor(prevTime / 60);
          const seconds = prevTime % 60;

          const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
          const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

          setTimerText(`${minutesStr}:${secondsStr}`);
          return prevTime - 1;
        } else {
          clearInterval(countdown);
          setTimerText('00:00'); // Ensure it displays 00:00 when the timer stops
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return <p className="font-bold text-center">{timerText}</p>;
};

export default Timer;
