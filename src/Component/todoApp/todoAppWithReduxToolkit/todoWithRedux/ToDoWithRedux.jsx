// src/TodoApp.js
import React, { useState } from "react";
import { addTodo, deleteTodo, updateTodo } from "../slice/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

const ToDoWithRedux = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  // Add new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return; // Prevent empty todos
    dispatch(addTodo(newTodo));
    setNewTodo(""); // Clear input
  };

  // Start editing a todo
  const startEditing = (todo) => {
    setEditTodo(todo.id);
    setEditText(todo.text);
  };

  // Update a todo
  const handleUpdateTodo = (id) => {
    if (editText.trim() === "") return; // Prevent empty updates
    dispatch(updateTodo({ id, text: editText }));
    setEditTodo(null); // Exit edit mode
    setEditText(""); // Clear input
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="p-6 w-1/3 mx-auto">
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
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>

      {/* Todo list */}
      <ul className="divide-y divide-gray-200">
        {todos.map((todo) => (
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
                  onClick={() => handleUpdateTodo(todo.id)}
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
                    onClick={() => handleDeleteTodo(todo.id)}
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
      {todos.length === 0 && (
        <p className="text-gray-600 mt-4">No tasks available. Add one!</p>
      )}
    </div>
  );
};

export default ToDoWithRedux;
