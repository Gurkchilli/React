import React from "react";

function Checklist() {
  return (
    <form>
      <input type="checkbox" name="checkbox1"></input>
      <label for="checkbox1"> Checkbox 1</label>
      <br></br>
      <input type="checkbox" name="checkbox2"></input>
      <label for="checkbox1"> Checkbox 2</label>
      <br></br>
      <input type="checkbox" name="checkbox3"></input>
      <label for="checkbox1"> Checkbox 3</label>
      <br></br>
      <input type="checkbox" name="checkbox4"></input>
      <label for="checkbox1"> Checkbox 4</label>
      <br></br>
    </form>
  );
}

export default Checklist;
