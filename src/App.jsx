import React from "react";
import Pagination from "./Component/pagenation/Pagination";
import ParentPagination from "./Component/pagenation/ParentPagination";
import DigitalClock from "./Component/digitalClock/DigitalClock";
import ParentCountDownTimer from "./Component/stopWatch/ParentCountDownTimer";
import TrafficLight from "./Component/trafficLight/TrafficLight";
import TodoWithUseState from "./Component/todoApp/todoAppwithUseState/TodoWithUseState";
import ToDoWithContext from "./Component/todoApp/totdoAppWithContextApi/todoWithContext/ToDoWithContext";
import { TodoProvider } from "./Component/todoApp/totdoAppWithContextApi/context/ToDoContext";
import ToDoWithRedux from "./Component/todoApp/todoAppWithReduxToolkit/todoWithRedux/ToDoWithRedux";

const App = () => {
  return (
    <div>
      {/* <ParentPagination /> */}
      {/* <DigitalClock /> */}
      {/* <ParentCountDownTimer /> */}
      {/* <TrafficLight /> */}
      {/* <TodoWithUseState /> */}
      {/* <TodoProvider>
        <ToDoWithContext />
      </TodoProvider> */}
      <ToDoWithRedux />
    </div>
  );
};

export default App;
