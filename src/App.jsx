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
import DragAndDrop from "./Component/drag-drop-functionality/DragAndDrop";
import AdvancedDragAndDrop from "./Component/drag-drop-functionality/AdvancedDragAndDrop";

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
      {/* <ToDoWithRedux /> */}
      <DragAndDrop />
      {/* <AdvancedDragAndDrop /> */}
    </div>
  );
};

export default App;
