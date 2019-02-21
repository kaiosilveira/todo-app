import React, { Component } from 'react'
import './App.css'
import TodoListContainer from './components/container/TodoListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
          <TodoListContainer />
      </div>
    );
  }
}

export default App;
