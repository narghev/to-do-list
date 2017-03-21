import React from 'react';
import ReactDOM from 'react-dom';
import { Lists } from './components/lists.jsx';
import { Todos } from './components/todos.jsx';

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
          this.listNames.push(element.name);
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
           const todos = [...this.state.todos, {name: newListName, tasks: []}];
           this.setState({ todos });
         }
       }
       searchLists = {(text)=>{
         this.searchListText = text;
         this.setState({selected: null});
       }}
       selectedList = { this.state.selected }
       selectList = {(s)=>{
         this.setState({selected: s});
       }}
     />
     <Todos listName={ this.listNames[this.state.selected] }/>
     </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
