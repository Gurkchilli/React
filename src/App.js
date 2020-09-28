import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClickInc = this.handleClickInc.bind(this);
    this.handleClickDouble = this.handleClickDouble.bind(this);
  }

  handleClickInc() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleClickDouble() {
    this.setState((prevState) => {
      return {
        count: prevState.count * 2,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClickInc}>Plus One</button>
        <button onClick={this.handleClickDouble}>Double</button>
      </div>
    );
  }
}

export default App;
