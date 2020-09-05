import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  const info = (
    <div>
      <h1>Erik Hildinge</h1>
      <p>
        I like horses and to play basketball.<br></br>The three vacations spots
        i would like to visit are:
      </p>
      <ol>
        <li>Malmö</li>
        <li>Gran Canaria</li>
        <li>The Vatican</li>
      </ol>
    </div>
  );
  return info;
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
