import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../../Components/FormBuilder";
import { sendExpense } from "../../actions/actions";
import Cardlist from '../../Components/Card/cardlist';

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
  { type: "number", name: "amount", placeholder: "Enter an amount", label: "Amount" },
  {
    type: "select",
    label: "Category",
    name: "category",
    items: values.map(value => ({ value: value, label: value }))
  }
];
class Expensepage extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-10">
          <Form fields={fields} handleSubmit={this.props.sendExpense} />
        </div>
        <div className="col-sm-1">
          <Cardlist />
        </div>
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
