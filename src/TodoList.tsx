import React from 'react';

const TodoList: React.FC = () => {
  const todos = [
    { id: 1, task: 'Finish React assignment' },
    { id: 2, task: 'Clean room' },
    { id: 3, task: 'Go for a walk' },
  ];

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
