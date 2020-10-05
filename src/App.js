import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "Sweden",
      gluten: false,
      lactose: false,
      vegetarian: false,
      diet: [],
    };
    this.handlechange = this.handlechange.bind(this);
  }

  //diet: prevState.diet + [value],
  handlechange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      //Handles the checkboxes
      this.setState({ [name]: checked });
      //Handles the list of clicked checkboxes
      if (checked) {
        this.setState((prevState) => {
          const diet = prevState.diet.concat([value]);
          return { diet };
        });
      } else {
        this.setState((prevState) => {
          const index = prevState.diet.indexOf([value]);
          const diet = prevState.diet.splice(index, 1);
          return { diet };
        });
      }
    } else {
      this.setState({ [name]: value });
    }
  }
  render() {
    return (
      <main>
        <form>
          <input
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handlechange}
          />
          <br />
          <input
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handlechange}
          />
          <br />
          <input
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handlechange}
          />
          <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handlechange}
          />
          {" Male"}
          <br />
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handlechange}
          />
          {" Female"}
          <br />
          <br />
          Select a location:
          <br />
          <select
            name="location"
            value={this.state.location}
            onChange={this.handlechange}
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
            checked={this.state.gluten}
            onChange={this.handlechange}
          />
          {" Gluten"}
          <br />
          <input
            type="checkbox"
            name="lactose"
            value="Lactose"
            checked={this.state.lactose}
            onChange={this.handlechange}
          />
          {" Lactose"}
          <br />
          <input
            type="checkbox"
            name="vegetarian"
            value="Vegetarian"
            checked={this.state.vegetarian}
            onChange={this.handlechange}
          />
          {" Vegetarian"}
          <br />
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>Your dietary restrictions: {this.state.diet.join(", ")}</p>
      </main>
    );
  }
}

export default App;
