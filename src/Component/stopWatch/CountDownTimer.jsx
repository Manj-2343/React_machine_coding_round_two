import React, { useEffect, useRef, useState } from "react";

const CountDownTimer = ({ initialTime, onTimeFinish }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef();

  // Convert seconds to HH:MM:SS format
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (onTimeFinish) {
              onTimeFinish();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, onTimeFinish]);

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
      <div className="text-4xl font-mono">
        <span className="bg-gray-100 px-3 py-2 rounded">{hours}</span>
        <span className="mx-2">:</span>
        <span className="bg-gray-100 px-3 py-2 rounded">{minutes}</span>
        <span className="mx-2">:</span>
        <span className="bg-gray-100 px-3 py-2 rounded">{seconds}</span>
      </div>
      <div className="mt-4">
        <button
          className={`px-4 py-2 rounded ${
            isRunning ? "bg-red-500" : "bg-green-500"
          } text-white mr-2`}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pause" : "Resume"}
        </button>
      </div>
    </div>
  );
};
export default CountDownTimer;
