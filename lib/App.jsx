import React from 'react';
import ReactDOM from 'react-dom';
import { Lists } from './components/lists.jsx';
import { Todos } from './components/todos.jsx';

let globalId = 0;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      selected: null
    }
    this.searchListText = '';
    this.listNames = new Array();
    this.listTodos = new Array();
    this.updateListNames = (search) => {
      this.listNames = [];
      this.state.todos.map((element, i)=>{
        if (element.name.includes(search))
          this.listNames.push({name: element.name, id: element.id});
      });
      this.listNames.sort();
    }
  }
  render() {
    this.updateListNames(this.searchListText);
    return (
     <div className="mainWindow">
       <Lists listNames = { this.listNames } addNewList={
         (newListName)=>{
           const todos = [...this.state.todos, {name: newListName, tasks: [], id: globalId}];
           this.setState({ todos });
           globalId++;
         }
       }
       searchLists = {(text)=>{
         this.searchListText = text;
         this.forceUpdate();
       }}
       selectedList = { this.state.selected }
       selectList = {(s)=>{
         this.setState({selected: s});
       }}
     />
     <Todos listName={ this.listNames[this.state.selected] }
       addTodo = {(todoText)=>{
         const currentTodos = this.state.todos;
         currentTodos[this.state.selected].tasks.push({task: todoText, checked: false});
         this.setState({todos: currentTodos});
       }}
       tasks = { this.state.todos[this.state.selected] }
       />
     </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
