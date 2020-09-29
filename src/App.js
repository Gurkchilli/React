import React, { Component } from "react";

import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todos: updatedTodos };
    });
  }

  render() {
    const todoItem = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} prop={todo} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoItem}</div>;
  }
}

export default App;
