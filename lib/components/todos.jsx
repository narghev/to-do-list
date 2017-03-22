import React from 'react';

export const Todos = ({ listName, addTodo, list, changeStatus }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    addTodo(event.target.children[0].value);
    event.target.children[0].value = "";
    event.preventDefault();
  }
  const statusChangeHandler = (event) => {
    changeStatus(event.target.id);
  }
  const calcChecked = (array) => {
    let result = 0;
    array.map((element, idx) => {
      if (element.checked)
        result++;
    });
    return result;
  }
  let content;
  if (list != undefined){
    content = list.tasks.map((task, id)=>{
      return (<div className="task"
        id = { id }
        key = { id }
        style = {{backgroundColor: `${task.checked ? '#E7E7E7' : ''}`, color: `${task.checked ? '#C8C8C8' : ''}`}}
        >
        <input id = { id } type="checkbox"
          onChange = { statusChangeHandler }
          checked = { task.checked }
        />
        { task.task }
      </div>);
    });
  }
  return (
    <div className="rightWindow">
      <div>
        <p>{ listName === undefined ? "" : listName.name }</p>
        {
          (()=>{
            if (list != undefined)
              return (<span>{`${calcChecked(list.tasks)} of ${list.tasks.length} Done`}</span>);
          })()
        }
        { content }
      </div>
      <form onSubmit = { submitHandler }>
        <input type="text" placeholder="Enter new Todo" className="newTodo"/>
      </form>
    </div>
  )
}
