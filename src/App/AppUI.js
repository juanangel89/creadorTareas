import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../Modal/Modal";


function AppUI() {
  const 
    {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext)
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />

          <TodoList>
            {loading && (
              <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
              </>
            )}
            {error && <TodosError/>}
            {!loading && searchedTodos.length === 0 && <EmptyTodos/>}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />
      { openModal && (      
        <Modal>
          <TodoForm />
      </Modal>
      )}
    </>
  );
}
export { AppUI };
