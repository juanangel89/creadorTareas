import React from "react";

function useLocalStorage(itemName, initialValue) {
  // esto es un custom hook que recibe 2 parametros y retorna 2 parametros
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  
  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName); //conseguir la info del local storage
        let parseItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //si no hay nada se crea una arreglo vacio
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem);
        }
        setLoading(false);
      } catch (error){
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    //este metodo actualiza el local storage
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {item, 
    saveItem,
    loading,
    error}; // estos parametros que retoran al use state [todos,saveTodos]
}

export { useLocalStorage };


// limpiar el localStorage
// localStorage.removeItem('TODO_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'cantar como loca', completed: false },
//   { text: 'visitar vecinos', completed: true },
// ];
// localStorage.setItem('TODO_V1',JSON.stringify(defaultTodos));
//enviar el objeto al localStorage