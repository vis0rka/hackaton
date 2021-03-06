import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../../Components/FormBuilder";
import {sendDebit} from "../../actions/actions";

const fields = [
  { type: "text", name: "description", placeholder: "Enter a description", label:"Description"},
  { type: "number", name: "amount", placeholder: "Enter an amount", label:"Amount" },
];
class Debitpage extends Component {
  render() {
    return (
      <React.Fragment>
        <Form fields={fields} handleSubmit={this.props.sendDebit} title={"DEBIT"}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  // connect to store?
});

const mapDispatchToProps = {
  sendDebit
  // dispatch actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Debitpage);
