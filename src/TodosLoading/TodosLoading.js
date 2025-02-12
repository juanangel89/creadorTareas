import './TodosLoading.css';

function TodosLoading() {
  return (
    // <p>Cargando TODOS..</p>
    <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text"></p>
    <span className="LoadingTodo-deleteIcon"></span>
  </div>
    
  );
}

export { TodosLoading };