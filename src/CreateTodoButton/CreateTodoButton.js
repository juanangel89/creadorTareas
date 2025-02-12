import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
  return (
    <button className="CreateTodoButton" onClick={
      (event)=>{
        console.log('click agregar TODO');
        console.log(event.target);
        setOpenModal(state=>!state);
      }}
    >+</button>
  );
}

export { CreateTodoButton };