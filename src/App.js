import React from "react";

import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

function App() {
  const todoItem = todosData.map((todo) => (
    <TodoItem key={todo.id} prop={todo} />
  ));

  return <div className="todo-list">{todoItem}</div>;
}

export default App;
