import React, { Component } from "react";
import FormComponent from "./FormComponent"

class Form extends Component {
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
          const diet = prevState.diet.concat(value);
          return { diet };
        });
      } else {
        this.setState((prevState) => {
          const index = prevState.diet.indexOf(value);
          prevState.diet.splice(index, 1);
          return { diet: prevState.diet };
        });
      }
    } else {
      this.setState({ [name]: value });
    }
  }
  render() {
    return(
      <FormComponent handlechange={this.handlechange} data={this.state} />
    )
  }
}

export default Form;
