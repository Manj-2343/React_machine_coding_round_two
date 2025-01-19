import React from "react";
import Pagination from "./Component/pagenation/Pagination";
import ParentPagination from "./Component/pagenation/ParentPagination";
import DigitalClock from "./Component/digitalClock/DigitalClock";
import ParentCountDownTimer from "./Component/stopWatch/ParentCountDownTimer";

const App = () => {
  return (
    <div>
      {/* <ParentPagination /> */}
      {/* <DigitalClock /> */}
      <ParentCountDownTimer />
    </div>
  );
};

export default App;
