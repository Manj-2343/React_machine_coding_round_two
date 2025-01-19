import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

// Usage Example
const BasicProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Basic Progress Bar</h2>
      <ProgressBar progress={progress} />
      <div className="mt-2 text-center">{progress}%</div>
    </div>
  );
};

export default BasicProgressBar;
