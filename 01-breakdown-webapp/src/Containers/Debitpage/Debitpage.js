import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../../Components/FormBuilder";
import {sendDebitData} from "../../actions/actions";
import DatePicker from "react-datepicker";

const fields = [
  // { type: "text", name: "description", placeholder: "Enter a description" },
  { type: "number", name: "amount", placeholder: "Enter an amount", label:"Amount" },
  // { type: "date"}
];
class Debitpage extends Component {
  render() {
    return (
      <React.Fragment>
        <Form fields={fields} handleSubmit={this.props.sendDebitData} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  // connect to store?
});

const mapDispatchToProps = {
  sendDebitData
  // dispatch actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Debitpage);
