import React, { useState } from 'react';
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, status: 'Pending' }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, status: todo.status === 'Completed' ? 'Pending' : 'Completed' }
          : todo
      )
    );
  };

  const updateTodoStatus = (id, status) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, status } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>TODO App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onStatusChange={updateTodoStatus} />
    </div>
  );
}
