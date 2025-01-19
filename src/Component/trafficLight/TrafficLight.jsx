import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prevLight) => {
        if (prevLight === "red") return "green";
        if (prevLight === "green") return "yellow";
        return "red";
      });
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="w-20 h-60 bg-gray-800 rounded-md p-4 flex flex-col items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full ${
            activeLight === "red" ? "bg-red-600" : "bg-red-300"
          }`}
        ></div>
        <div
          className={`w-12 h-12 rounded-full ${
            activeLight === "yellow" ? "bg-yellow-500" : "bg-yellow-200"
          }`}
        ></div>
        <div
          className={`w-12 h-12 rounded-full ${
            activeLight === "green" ? "bg-green-500" : "bg-green-200"
          }`}
        ></div>
      </div>
      <h1 className="text-lg font-semibold">
        Current Light: <span className="capitalize">{activeLight}</span>
      </h1>
    </div>
  );
};

export default TrafficLight;
