import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: "",
      isLoading: false,
    };
    this.getCharacterData = this.getCharacterData.bind(this);
  }

  //fetches data when a button is pressed
  getCharacterData(id) {
    this.setState({
      isLoading: true,
    });

    fetch("https://swapi.dev/api/people/" + id)
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return {
            txt: JSON.stringify(data, null, 2),
            datafetched: true,
            isLoading: false,
          };
        })
      );
  }

  render() {
    //Display the JSON text, only if it is not an empty string
    const displayText =
      this.state.txt !== ""
        ? this.state.txt
        : "Press a button to fetch data regarding the character.";
    //Displays LOADING when fetching the data
    const loadingIndicator = this.state.isLoading && "LOADING";

    return (
      <div>
        <button onClick={() => this.getCharacterData(1)}>Luke Skywalker</button>
        <button onClick={() => this.getCharacterData(2)}>C-3PO</button>
        <button onClick={() => this.getCharacterData(5)}>Leia Organa</button>
        <br />
        <span>{loadingIndicator}</span>
        <br />
        <span>{displayText}</span>
      </div>
    );
  }
}

export default App;
