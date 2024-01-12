import React from 'react';

const TodoItem = ({ todo, onToggle }) => {


  return (
    <div className='box'>
      <input className='checkbox' type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button className='delete-button' type='button'>x</button>
    </div>
  );
};

export default TodoItem;
