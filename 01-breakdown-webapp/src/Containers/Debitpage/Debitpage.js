import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../../Components/FormBuilder";
import {sendDebitData} from "../../actions/actions";

const fields = [
  // { type: "text", name: "description", placeholder: "Enter a description" },
  { type: "number", name: "amount", placeholder: "Enter an amount" }
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
