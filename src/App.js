import React, { useState, Component } from "react";
import {
  BLACK,
  DARK_GREY,
  LIGHT_GREY,
  PRIMARY,
  DARK_PRIMARY,
  WHITE,
} from "./colors";

const header = {
  textAlign: "center",
  fontFamily: "Trocchi",
  fontSize: "45px",
  lineHeight: "48px",
  paddingBottom: "50px",
};

const container = {
  padding: 20,
  width: "100%",
  height: "100%",
  backgroundColor: LIGHT_GREY,
};

const displayContainer = {
  paddingBottom: 10,
  textAlign: "right",
};

const numberDisplay = {
  height: "10%",
  width: "100%",
  fontSize: 40,
  backgroundColor: WHITE,
  borderRadius: 6,
  borderColor: DARK_GREY,
  border: "solid",
  padding: 10,
  paddingRight: 20,
};

const numberRow = {
  display: "flex",
  height: "10%",
  width: "100%",
  paddingBottom: "10px",
};

const numberButton = {
  flex: 1,
  fontWeight: "bold",
  fontSize: 40,
  backgroundColor: PRIMARY,
  borderRadius: 4,
};

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
      <div style={container}>
        <div style={displayContainer}>
          <div style={numberDisplay}>123</div>
        </div>

        <div style={numberRow}>
          <button style={numberButton}>CLEAR</button>
        </div>

        <div style={numberRow}>
          <button style={numberButton}>1</button>
          <button style={numberButton}>2</button>
          <button style={numberButton}>3</button>
          <button style={numberButton}>÷</button>
        </div>

        <div style={numberRow}>
          <button style={numberButton} onClick={this.handleClick}>
            4
          </button>
          <button style={numberButton} onClick={this.handleClick}>
            5
          </button>
          <button style={numberButton} onClick={this.handleClick}>
            6
          </button>
          <button style={numberButton}>x</button>
        </div>

        <div style={numberRow}>
          <button style={numberButton} onClick={this.handleClick}>
            7
          </button>
          <button style={numberButton} onClick={this.handleClick}>
            8
          </button>
          <button style={numberButton} onClick={this.handleClick}>
            9
          </button>
          <button style={numberButton}>-</button>
        </div>

        <div style={numberRow}>
          <button style={numberButton} onClick={this.handleClick}>
            ±
          </button>
          <button style={numberButton} onClick={this.handleClick}>
            0
          </button>
          <button style={numberButton} onClick={this.handleClick}>
            ,
          </button>
          <button style={numberButton}>+</button>
        </div>

        <div style={numberRow}>
          <button style={numberButton}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
