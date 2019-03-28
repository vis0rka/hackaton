import React, { Component } from "react";
import Form from "../../Components/FormBuilder";

const values = [
  "accomodation",
  "car",
  "family",
  "clothes",
  "food",
  "recreation",
  "health",
  "bills",
  "pets",
  "household",
  "technologies",
  "travel",
  "others"
];

const fields = [
  // { type: "text", name: "description", placeholder: "Enter a description" },
  { type: "number", name: "Amount", placeholder: "Enter an amount" },
  {
    type: "select",
    name: "Category",
    items: values.map(value => ({ value: value, label: value }))
  }
];
class Expensepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Form fields={fields} />
      </React.Fragment>
    );
  }
}

export default Expensepage;
