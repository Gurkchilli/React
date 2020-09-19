import React, { Component } from "react";

import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const todoItem = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} prop={todo} />
    ));
    return <div className="todo-list">{todoItem}</div>;
  }
}

export default App;
