import React from 'react';

export const Todos = ({ listName, addTodo, tasks }) => {
  const submitHandler = (event) => {
    addTodo(event.target.children[0].value);
    event.target.children[0].value = "";
    event.preventDefault();
  }
  let content;
  if (tasks != undefined){
    content = tasks.tasks.map((task, id)=>{
      return (<p id = { id } key = { id }>
        { task }
      </p>);
    });
  }
  return (
    <div className="rightWindow">
      <div>
        <p>{ listName === undefined ? "" : listName.name }</p>
        { content }
      </div>
      <form onSubmit = { submitHandler }>
        <input type="text" placeholder="Enter new Todo" className="newTodo"/>
      </form>
    </div>
  )
}
