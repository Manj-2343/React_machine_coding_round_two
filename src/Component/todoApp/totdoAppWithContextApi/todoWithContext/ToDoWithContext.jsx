import React, { useState } from "react";
import { useTodos } from "../context/ToDoContext";

const ToDoWithContext = () => {
  const { state, dispatch } = useTodos();
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() === "") return; // Prevent empty todos
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo(""); // Clear input
  };

  // Start editing a todo
  const startEditing = (todo) => {
    setEditTodo(todo.id);
    setEditText(todo.text);
  };

  // Update a todo
  const updateTodo = (id) => {
    if (editText.trim() === "") return; // Prevent empty updates
    dispatch({ type: "UPDATE_TODO", payload: { id, text: editText } });
    setEditTodo(null); // Exit edit mode
    setEditText(""); // Clear input
  };

  // Delete a todo
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div className="p-6 w-1/4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>

      {/* Input for new todo */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="border border-gray-300 rounded px-2 py-1 w-full"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>

      {/* Todo list */}
      <ul className="divide-y divide-gray-200">
        {state.todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between py-2">
            {editTodo === todo.id ? (
              // Editing mode
              <div className="flex gap-2 items-center w-full">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 flex-grow"
                />
                <button
                  onClick={() => updateTodo(todo.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditTodo(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              // Display mode
              <div className="flex justify-between items-center w-full">
                <span>{todo.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEditing(todo)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* No Todos */}
      {state.todos.length === 0 && (
        <p className="text-gray-600 mt-4">No tasks available. Add one!</p>
      )}
    </div>
  );
};

export default ToDoWithContext;
