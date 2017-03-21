import React from 'react';

export const Todos = ({ listName }) => {
  return (
    <div className="rightWindow">
      <div>
        <p>{ listName }</p>
      </div>
      <form>
        <input type="text" placeholder="Enter new Todo" className="newTodo"/>
      </form>
    </div>
  )
}
