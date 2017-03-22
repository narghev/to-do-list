import React from 'react';

export const Lists = ({ listNames, addNewList, searchLists, selectedList, selectList }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    addNewList(event.target.children[0].value);
    event.target.children[0].value = "";
  };
  const searchHandler = (event) => {
    searchLists(event.target.value);
  }
  const content = listNames.map((element, id)=>{
    return (<p className="listNames" id = { element.id } key = { id }
      style = {{backgroundColor: `${element.id == selectedList ? '#4F864C' : 'white'}`, color: `${id == selectedList ? 'white' : 'black'}`}}
      onClick = { (event)=>{
        selectList(event.target.id);
      } }
      >
      { element.name }
    </p>);
  });
  return (
    <div className="leftWindow">
      <div>
        <p>Todo Lists</p>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder="Search for list" onChange = { searchHandler }/>
        { content }
      </div>
      <form onSubmit={ submitHandler }>
        <input type="text" placeholder="Enter new list name" className="newList"/>
        <input type="submit" value="+" style={{left: '16.7%'}}/>
      </form>
    </div>
  )
}
