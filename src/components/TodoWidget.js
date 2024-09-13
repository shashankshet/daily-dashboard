import React, { useState } from 'react';

const TodoWidget = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodoItems([...todoItems, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedTodos);
  };

  return (
    <div className="card todo-widget">
      <h3>To-Do List</h3>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todoItems.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => handleRemoveTodo(index)} className="remove-btn">
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoWidget;
