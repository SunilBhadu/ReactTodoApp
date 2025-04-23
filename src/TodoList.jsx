import React from 'react';
import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, onToggle, onDelete, onStatusChange }) {
  if (todos.length === 0) {
    return <p className="empty">No todos yet!</p>;
  }
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  );
}
