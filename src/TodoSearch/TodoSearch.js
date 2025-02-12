import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';
import React from 'react';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
    } = React.useContext(TodoContext)

  return (
    <input
      placeholder="Buscar TODO"
      className="TodoSearch"
      value={searchValue}
      onChange={(event)=>{
        // console.log('evento escribir: '+event.target.value);
        setSearchValue(event.target.value)
      }}
    />
  );
}

export { TodoSearch };