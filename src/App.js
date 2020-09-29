import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>You are logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        <button onClick={this.handleClick}>
          Log {this.state.isLoggedIn ? "Out" : "In"}
        </button>
      </div>
    );
  }
}

export default App;
