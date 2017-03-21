import React from 'react';

export const Lists = ({ listNames, addNewList, searchLists, selectedList, selectList }) => {
  const submitHandler = (event) => {
    addNewList(event.target.children[0].value);
    event.target.children[0].value = "";
    event.preventDefault();
  };
  const searchHandler = (event) => {
    searchLists(event.target.value);
  }
  const content = listNames.map((name, id)=>{
    return (<p className="listNames" id = { id } key = { id }
      style= {{backgroundColor: `${id == selectedList ? '#4F864C' : 'white'}`, color: `${id == selectedList ? 'white' : 'black'}`}}
      onClick = { (event)=>{
        selectList(event.target.id);
      } }
      >
      { name }
    </p>);
  });
  return (
    <div className="leftWindow">
      <div>
        <p>Todo Lists</p>
        <input type="text" placeholder="Search for list" onChange = { searchHandler }/>
        { content }
      </div>
      <form onSubmit={ submitHandler }>
        <input type="text" placeholder="Enter new list name" className="newList"/>
      </form>
    </div>
  )
}
