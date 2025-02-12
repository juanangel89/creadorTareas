import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm(params) {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    } 

    const onSubmit =(event) =>{//con onSumit se ahce el metodo para el formulario
        event.preventDefault();//hace que la pagina no se recarge cuando le de agregar
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel =(event) =>{//con onSumit se ahce el metodo para el formulario
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe tu TODO"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >Cancelar</button>
                <button
                type="submit" 
                className="TodoForm-button TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    )
}

export {TodoForm};