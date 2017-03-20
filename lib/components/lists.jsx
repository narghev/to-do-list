import React from 'react';

export const Lists = ({ listNames, addNewList }) => {
  const submitHandler = (event) => {
    addNewList(event.target.children[0].value);
    event.target.children[0].value = "";
    event.preventDefault();
  };
  const content = listNames.map((name, id)=>{
    return (<p className="listNames" key = { id }>{ name }</p>);
  });
  return (
    <div className="leftWindow">
      <div>
        <p>Todo Lists</p>
        <input type="text" placeholder="Search for list"/>
        { content }
      </div>
      <form onSubmit={ submitHandler }>
        <input type="text" placeholder="Enter new list name" className="newList"/>
      </form>
    </div>
  )
}
