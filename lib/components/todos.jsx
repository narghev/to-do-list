import React from 'react';

export const Todos = ({ listName, addTodo, tasks }) => {
  const submitHandler = (event) => {
    addTodo(event.target.children[0].value);
    event.target.children[0].value = "";
    event.preventDefault();
  }
  const content = [];
  if (tasks != undefined){
    const content = tasks.map((task, id)=>{
      return (<p id = { id } key = { id }
        >
        { task }
      </p>);
    });
  }
  return (
    <div className="rightWindow">
      <div>
        <p>{ listName }</p>
        { content }
      </div>
      <form onSubmit = { submitHandler }>
        <input type="text" placeholder="Enter new Todo" className="newTodo"/>
      </form>
    </div>
  )
}
