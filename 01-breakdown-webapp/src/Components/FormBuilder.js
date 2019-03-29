import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
// import DatePicker from "react-datepicker";
class FormBuilder extends Component {
  state = { values: {} };

  getFields = (field, value) => {
    const { type, name, placeholder, items, label } = field;
    switch (type) {
      case "text":
      case "number": {
        return (
          <div className="form-group" key={name}>
            <label htmlFor={name.toLowerCase()} style={{ color: "white" }}>
              {label}
            </label>
            <input
              onChange={event => {
                this.handleChange(event.target.value, field.key || field.name);
              }}
              value={value}
              type={type}
              className="form-control"
              id={name.toLowerCase()}
              placeholder={placeholder}
              required
            />
          </div>
        );
      }

      case "select": {
        return (
          <React.Fragment key={name}>
            <label htmlFor="amount" style={{ color: "white" }}>
              {label}
            </label>
            <div className="input-group mb-3">
              <select
                onChange={event => {
                  this.handleChange(
                    event.target.value,
                    field.key || field.name
                  );
                }}
                value={value}
                className="custom-select"
                id={name.toLowerCase()}
              >
                {_.map(items, item => (
                  <option
                    value={item.value}
                    key={`key-${item.value}`}
                  // style={{ textTransform: "capitalize" }}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </React.Fragment>
        );
      }
      default:
        return null;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Form, handleSubmit: ", this.state.values);
    this.props.handleSubmit(this.state.values);
  };

  handleChange = (value, key) => {
    this.setState({
      values: {
        ...this.state.values,
        [key]: value
      }
    });
  };

  render = () => {
    const { userSumIncome, userSumExpense, userSumDebit } = this.props;
    const userBalance = userSumIncome - (userSumExpense + userSumDebit);
    return (
      <form
        style={{
          background: "rgba(0,0,0,0.3)",
          padding: "40px",
          width: "600px"
        }}
        onSubmit={this.handleSubmit}
      >
        <h4 style={{ color: "white" }}> {this.props.title} </h4><br />
        <h5 style={{ color: "white" }}> User balance: {userBalance ? (`${userBalance} HUF`) : "0 HUF"}</h5><br />

        {_.map(this.props.fields, field => this.getFields(field))}
        <button type="submit" className="btn btn-primary">
          Submit
          </button>
      </form>
    );
  };
}

const mapStateToProps = store => ({
  userSumIncome: store.userBalance.sumIncome,
  userSumExpense: store.userBalance.sumExpense,
  userSumDebit: store.userBalance.sumDebit,
});


const mapDispatchToProps = {
  // dispatch actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBuilder);
