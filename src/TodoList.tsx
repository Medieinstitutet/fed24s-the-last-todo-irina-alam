import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Finish React assignment', done: false },
    { id: 2, text: 'Clean room', done: false },
    { id: 3, text: 'Go for a walk', done: false },
  ]);

  const handleDelete = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo =>
          !todo.done ? (
            <li key={todo.id} onClick={() => handleDelete(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default TodoList;
