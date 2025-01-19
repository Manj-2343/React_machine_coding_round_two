import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // Cleanup function to clear interval when component unmounts
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Digital Clock</h1>
      <div className="text-4xl font-mono">
        <span>{time.getHours().toString().padStart(2, "0")}</span>
        <span className="mx-2">:</span>
        <span>{time.getMinutes().toString().padStart(2, "0")}</span>
        <span className="mx-2">:</span>
        <span>{time.getSeconds().toString().padStart(2, "0")}</span>
      </div>
      <div className="mt-4 text-lg">
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
};

export default DigitalClock;
