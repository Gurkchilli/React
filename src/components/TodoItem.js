import React from "react";

function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" name="checkbox" className="checkbox"></input>
      <label htmlFor="checkbox">Checkbox Text Placeholder</label>
    </div>
  );
}

export default TodoItem;
