import React from "react"

function FormComponent(props){
    return (
        <main>
          <form>
            <input
              placeholder="First Name"
              name="firstName"
              value={props.data.firstName}
              onChange={props.handlechange}
            />
            <br />
            <input
              placeholder="Last Name"
              name="lastName"
              value={props.data.lastName}
              onChange={props.handlechange}
            />
            <br />
            <input
              placeholder="Age"
              name="age"
              value={props.data.age}
              onChange={props.handlechange}
            />
            <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={props.handlechange}
            />
            {" Male"}
            <br />
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={props.handlechange}
            />
            {" Female"}
            <br />
            <br />
            Select a location:
            <br />
            <select
              name="location"
              value={props.data.location}
              onChange={props.handlechange}
            >
              <option value="Sweden">Sweden</option>
              <option value="Finland">Finland</option>
              <option value="Denmark">Denmark</option>
            </select>
            <br />
            <br />
            Dietary restrictions:
            <br />
            {/* Create check boxes for dietary restrictions here */}
            <input
              type="checkbox"
              name="gluten"
              value="Gluten"
              checked={props.data.gluten}
              onChange={props.handlechange}
            />
            {" Gluten"}
            <br />
            <input
              type="checkbox"
              name="lactose"
              value="Lactose"
              checked={props.data.lactose}
              onChange={props.handlechange}
            />
            {" Lactose"}
            <br />
            <input
              type="checkbox"
              name="vegetarian"
              value="Vegetarian"
              checked={props.data.vegetarian}
              onChange={props.handlechange}
            />
            {" Vegetarian"}
            <br />
            <br />
            <button>Submit</button>
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>
            Your name: {props.data.firstName} {props.data.lastName}
          </p>
          <p>Your age: {props.data.age}</p>
          <p>Your gender: {props.data.gender}</p>
          <p>Your destination: {props.data.location}</p>
          <p>Your dietary restrictions: {props.data.diet.join(", ")}</p>
        </main>
      );
}

export default FormComponent;