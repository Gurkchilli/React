import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
      </form>
    );
  }
}

export default App;
