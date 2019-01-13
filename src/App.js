import React from 'react';

import './App.css';
import AddTodo from './addTodo';
import Todo from './Todo'

class App extends React.Component {
  static todo = {
    role: '',
    checked: false,
    id: 1
  };

  myNewTodo(value) {
    App.todo.role = value
  }

  render() {
    return (
      <div className="App">
        <div className="menu">
          TODOLIST
        </div>
        <AddTodo getTodo={this.myNewTodo} />
        <Todo />
      </div>
    );
  }
}

export default App;
