import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../../Components/FormBuilder";
import {sendBudget} from "../../actions/actions";

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
  { type: "number", name: "maxValue", placeholder: "Enter an amount", label: "Maximum amount / value :" },
  {
    type: "select",
    label: "Category",
    name: "category",
    items: values.map(value => ({ value: value, label: value }))
  }
];

class Budgetpage extends Component {
  render() {
    return (
      <React.Fragment>
        <Form fields={fields} handleSubmit={this.props.sendBudget} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  // connect to store?
});

const mapDispatchToProps = {
  sendBudget
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budgetpage);
