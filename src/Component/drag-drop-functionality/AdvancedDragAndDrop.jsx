import { useState, useEffect } from "react";

const AdvancedDragAndDrop = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : {
          todo: [
            { id: 1, text: "Learn React", priority: "high" },
            { id: 2, text: "Build Projects", priority: "medium" },
            { id: 3, text: "Write Documentation", priority: "low" },
          ],
          inProgress: [
            { id: 4, text: "Study JavaScript", priority: "high" },
            { id: 5, text: "Learn TypeScript", priority: "medium" },
          ],
          done: [
            {
              id: 6,
              text: "Setup Development Environment",
              priority: "medium",
            },
            { id: 7, text: "Create GitHub Account", priority: "low" },
          ],
        };
  });

  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDragStart = (e, task, sourceList) => {
    setDraggedItem({ task, sourceList });
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("sourceList", sourceList);
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "#f3f4f6";
  };

  const handleDragLeave = (e) => {
    e.currentTarget.style.backgroundColor = "";
  };

  const handleDrop = (e, targetList) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "";

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

  const addNewTask = (list) => {
    const newTask = {
      id: Date.now(),
      text: prompt("Enter task description:"),
      priority: "medium",
    };

    if (newTask.text) {
      setTasks((prev) => ({
        ...prev,
        [list]: [...prev[list], newTask],
      }));
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: "border-l-4 border-red-500",
      medium: "border-l-4 border-yellow-500",
      low: "border-l-4 border-green-500",
    };
    return colors[priority];
  };

  const TaskColumn = ({ title, tasks, status, color }) => (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow-md w-80"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, status)}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-xl font-bold ${color}`}>{title}</h2>
        <button
          onClick={() => addNewTask(status)}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          +
        </button>
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, task, status)}
            onDragEnd={handleDragEnd}
            className={`
              bg-white p-3 rounded shadow cursor-move
              hover:shadow-md transition-all duration-200
              ${getPriorityColor(task.priority)}
            `}
          >
            <div className="flex justify-between items-center">
              <span>{task.text}</span>
              <select
                value={task.priority}
                onChange={(e) => {
                  setTasks((prev) => ({
                    ...prev,
                    [status]: prev[status].map((t) =>
                      t.id === task.id ? { ...t, priority: e.target.value } : t
                    ),
                  }));
                }}
                className="text-sm border rounded p-1"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
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

export default AdvancedDragAndDrop;
