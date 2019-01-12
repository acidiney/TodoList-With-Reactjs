import React from 'react';

import AddTodo from './addTodo';
import Todo from './Todo'

class App extends React.Component {
  static todo = "";
myNewTodo(value) {
  App.todo = value
}
render () {
    return (
      <div className="App">
        <AddTodo getTodo={this.myNewTodo} />
        <Todo  />
      </div>
    );
  }
}

export default App;
