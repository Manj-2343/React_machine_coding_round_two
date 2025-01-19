import React, { useState } from "react";

const TodoWithUseState = () => {
  const [todos, setTodos] = useState([]); // To store the list of todos
  const [newTodo, setNewTodo] = useState(""); // To store the current input for a new todo
  const [editTodo, setEditTodo] = useState(null); // To store the todo being edited
  const [editText, setEditText] = useState(""); // To store the updated text during editing

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() === "") return; // Prevent adding empty todos
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo(""); // Clear the input field
  };

  // Delete a todo by id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Start editing a todo
  const startEditing = (todo) => {
    setEditTodo(todo.id);
    setEditText(todo.text);
  };

  // Update a todo
  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditTodo(null); // Exit editing mode
    setEditText(""); // Clear the editing field
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
      {todos.length === 0 && (
        <p className="text-gray-600 mt-4">No tasks available. Add one!</p>
      )}
    </div>
  );
};

export default TodoWithUseState;
