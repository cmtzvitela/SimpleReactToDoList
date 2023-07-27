import React, { useState } from 'react';

export const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What are the tasks today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
