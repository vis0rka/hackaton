import React, { Component } from "react";
import Form from "../../Components/FormBuilder";

const fields = [
  { type: "text", name: "description", placeholder: "Enter a description", label:"Description"  },
  { type: "number", name: "amount", placeholder: "Enter an amount", label:"Amount" }
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
