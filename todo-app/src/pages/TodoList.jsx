import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import '../App.css';

const TodoList = () => {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(storedTodos);
  const [newTodo, setNewTodo] = useState('');

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, text: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  // Guarda las tareas en el localStorage cada vez que se actualizan
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className='todo-list'>
        <h1>Lista de Tareas</h1>
        <div>
          <input
            type='text'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder='Agregar tarea...'
          />
          <button onClick={handleAddTodo}>Agregar</button>
        </div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
