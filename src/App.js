import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: "",
      datafetched: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          console.log(data);
          return {
            txt: JSON.stringify(data, null, 2),
            datafetched: true,
          };
        })
      );
  }

  render() {
    const displayText = this.state.datafetched ? this.state.txt : "Loading";
    return (
      <div>
        <br />
        <span>{displayText}</span>
      </div>
    );
  }
}

export default App;
