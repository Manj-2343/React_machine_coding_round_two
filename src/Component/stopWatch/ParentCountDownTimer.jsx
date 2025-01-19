import React, { useState } from "react";
import CountDownTimer from "./CountDownTimer";

const ParentCountDownTimer = () => {
  const [isFinished, setIsFinished] = useState(false);

  const handleTimeFinish = () => {
    setIsFinished(true);
    // You can add any additional actions here
    alert("Countdown completed!");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <CountDownTimer initialTime={300} onTimeFinish={handleTimeFinish} />

      {isFinished && (
        <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded">
          Timer has finished!
        </div>
      )}

      {/* Optional: Reset Button */}
      {isFinished && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setIsFinished(false);
            window.location.reload(); // Simple reset solution
          }}
        >
          Reset Timer
        </button>
      )}
    </div>
  );
};

export default ParentCountDownTimer;
