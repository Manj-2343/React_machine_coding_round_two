import { useState } from "react";

const DragAndDrop = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, text: "Learn React" },
      { id: 2, text: "Build Projects" },
      { id: 3, text: "Write Documentation" },
    ],
    inProgress: [
      { id: 4, text: "Study JavaScript" },
      { id: 5, text: "Learn TypeScript" },
    ],
    done: [
      { id: 6, text: "Setup Development Environment" },
      { id: 7, text: "Create GitHub Account" },
    ],
  });

  const handleDragStart = (e, task, sourceList) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("sourceList", sourceList);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetList) => {
    e.preventDefault();

    const task = JSON.parse(e.dataTransfer.getData("task"));
    const sourceList = e.dataTransfer.getData("sourceList");

    if (sourceList !== targetList) {
      setTasks((prev) => ({
        ...prev,
        [sourceList]: prev[sourceList].filter((t) => t.id !== task.id),
        [targetList]: [...prev[targetList], task],
      }));
    }
  };

  const getColumnStyle = (isDraggingOver) => `
    bg-gray-100 p-4 rounded-lg shadow-md w-80
    ${isDraggingOver ? "bg-blue-50" : ""}
  `;

  const TaskColumn = ({ title, tasks, status, color }) => (
    <div
      className={getColumnStyle(false)}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, status)}
    >
      <h2 className={`text-xl font-bold mb-4 ${color}`}>{title}</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, task, status)}
            className="bg-white p-3 rounded shadow cursor-move hover:shadow-md transition-shadow duration-200"
          >
            {task.text}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Task Management Board
      </h1>
      <div className="flex justify-center gap-6">
        <TaskColumn
          title="To Do"
          tasks={tasks.todo}
          status="todo"
          color="text-red-600"
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks.inProgress}
          status="inProgress"
          color="text-yellow-600"
        />
        <TaskColumn
          title="Done"
          tasks={tasks.done}
          status="done"
          color="text-green-600"
        />
      </div>
    </div>
  );
};

export default DragAndDrop;
