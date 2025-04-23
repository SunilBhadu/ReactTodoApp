import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onStatusChange }) {
  return (
    <li className={`todo-item${todo.status === 'Completed' ? ' completed' : ''}`}>
      <span
        className="todo-text"
        onClick={() => onToggle(todo.id)}
        title="Toggle status"
      >
        {todo.text}
      </span>
      <select
        className="status-select"
        value={todo.status}
        onChange={e => onStatusChange(todo.id, e.target.value)}
        style={{ marginLeft: 10, marginRight: 10 }}
        aria-label="Change status"
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button className="delete-btn" onClick={() => onDelete(todo.id)} title="Delete">
        &times;
      </button>
    </li>
  );
}
