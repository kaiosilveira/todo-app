import React, { Component } from 'react'
import './App.css'
import TodoListContainer from './components/container/TodoListContainer'
import AddTodoContainer from './components/container/AddTodoContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
          <AddTodoContainer />
          <TodoListContainer />
      </div>
    );
  }

  onAddTodo = text => console.log(text)

}

export default App;
