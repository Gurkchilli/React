import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        name="checkbox"
        checked={props.prop.completed}
        onChange={() => console.log("Clicked checkbox")}
        className="checkbox"
      ></input>
      <label htmlFor="checkbox">{props.prop.text}</label>
    </div>
  );
}

export default TodoItem;
