const TodoItem = ({ todo, onToggle, onRemove }) => {
  
  return (
    <div className='box'>
      <input className='checkbox' type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button className='remove-button' onClick={() => onRemove(todo.id)}>X</button>
    </div>
  );
};

export default TodoItem;
