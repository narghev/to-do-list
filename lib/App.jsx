import React from 'react';
import ReactDOM from 'react-dom';
import { Lists } from './components/lists.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
    this.listNames = new Array();
    this.listTodos = new Array();
    this.updateListNames = () => {
      this.listNames = [];
      this.state.todos.map((element, i)=>{
        this.listNames.push(element.name);
      });
      this.listNames.sort();
    }
  }
  render() {
    this.updateListNames();
    return (
     <div className="mainWindow">
       <Lists listNames = { this.listNames } addNewList={
         (newListName)=>{
           const todos = [...this.state.todos, {name: newListName, tasks: []}];
           this.setState({ todos });
         }
       }/>
     </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
