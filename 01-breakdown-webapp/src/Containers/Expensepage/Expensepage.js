import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../../Components/FormBuilder";
import {sendExpense} from "../../actions/actions";

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
  {
    type: "select",
    label:"Category",
    name: "category",
    items: values.map(value => ({ value: value, label: value }))
  },
  { type: "number", name: "amount", placeholder: "Enter an amount", label:"Amount"  },
];
class Expensepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Form fields={fields} handleSubmit={this.props.sendExpense} title={"EXPENSE"}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  // connect to store?
});

const mapDispatchToProps = {
  sendExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expensepage);
