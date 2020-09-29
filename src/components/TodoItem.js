import React from "react";

//Grå, italics, och linje igenom

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={props.prop.completed}
        onChange={() => props.handleChange(props.prop.id)}
      ></input>
      <label className={props.prop.completed && "completed"} htmlFor="checkbox">
        {props.prop.text}
      </label>
    </div>
  );
}

export default TodoItem;
