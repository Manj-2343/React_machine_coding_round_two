import React from "react";
import Pagination from "./Component/pagenation/Pagination";
import ParentPagination from "./Component/pagenation/ParentPagination";
import DigitalClock from "./Component/digitalClock/DigitalClock";
import ParentCountDownTimer from "./Component/stopWatch/ParentCountDownTimer";
import TrafficLight from "./Component/trafficLight/TrafficLight";

const App = () => {
  return (
    <div>
      {/* <ParentPagination /> */}
      {/* <DigitalClock /> */}
      {/* <ParentCountDownTimer /> */}
      <TrafficLight />
    </div>
  );
};

export default App;
