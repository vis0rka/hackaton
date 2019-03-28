import React, { Component } from "react";
import Form from "../../Components/FormBuilder";

const fields = [
  { type: "text", name: "Description", placeholder: "Enter a description" },
  { type: "number", name: "Amount", placeholder: "Enter an amount" }
];
class Incomepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Form fields={fields} />
      </React.Fragment>
    );
  }
}

export default Incomepage;
