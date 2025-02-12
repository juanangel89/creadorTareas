import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';
import React from "react";

function TodoCounter() {
  const {
    completedTodos,
    cantTodos,
    } = React.useContext(TodoContext)
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{cantTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };