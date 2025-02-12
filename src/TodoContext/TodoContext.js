import React from "react";
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider ({children}) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage ('TODO_V1', []); //aca llamamos al custom hook y lo pasamos al use state
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);

      const searchedTodos=todos.filter(
        (todo)=>{
          const todoText=todo.text.toLocaleLowerCase();
          const searchText=searchValue.toLocaleLowerCase();
          return todoText.includes(searchText)
          // todo.text.toLocaleLowerCase().includes(searhValue.toLocaleLowerCase()) esto con () en vez de {}
        }
      );
      const cantTodos=todos.length;
    
      const completedTodos=todos.filter(todo => !!todo.completed).length
      //filtra el arreglo apra buscar verdaderos y con el length cuenta cuantos son
    
      const addTodo = (text) =>{
        const newTodos = [...todos]
        newTodos.push({
          text,
          completed:false
        })
        saveTodos(newTodos);
      }

      const completeTodo = (text) => {//metodo para checkear un todo
        const newTodos = [...todos]
        const todoIdex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos[todoIdex].completed=true
        // pasa el todo a completad cuando se le da clik 
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {//meotodo para borrar un todo
        const newTodos = [...todos]
        const todoIdex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos.splice(todoIdex, 1)
        // borra el todo cuando se le da clik 
        saveTodos(newTodos)
      }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            cantTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};