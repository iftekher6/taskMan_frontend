import React from "react";
import useAuth from "../hooks/useAuth";

const TodoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {

  const {auth} = useAuth()
  return (
    <>
   {
    auth?.role === 'user' ?
    <h1>Tasks Given by Admin</h1>
      : null 
   }
   
    <div className="todo">
     
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input 
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        />{
          auth?.role === 'user' ? '' :
        
        <button  onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button> }
      </div>
    </div>
    </>
  );
};

export default TodoItem;
