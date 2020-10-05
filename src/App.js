import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <form>
        <input
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
          type="text"
          placeholder="First Name"
        ></input>

        <br />

        <input
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleChange}
          type="text"
          placeholder="Last Name"
        ></input>

        <h1>
          {this.state.firstName} <br /> {this.state.lastName}
        </h1>

        <br />

        <input
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        />
        {" Is friendly?"}

        <br />

        <input
          type="radio"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange}
        />
        {" Male"}
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange}
        />
        {" Female"}
        <h3>You are a {this.state.gender}</h3>

        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <h3>Your favorite color is {this.state.favColor}</h3>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
