import React, { Component } from 'react';
import Loading from '../../Components/Loading/Loading';
import { connect } from 'react-redux';
import { getAllUserInfo } from '../../actions/actions'
class Homepage extends Component {

  componentDidMount = () => {
    this.props.getAllUserInfo("5c9ca6490650e135a4634b47");
    console.log(this.dateMonth())
  }

  handleClick = () => {
    const { userIncome } = this.props;
    console.log(this.props.userSumIncome)
  }

  dateMonth = () => {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    const monthIndex = new Date().getMonth();
    const year = new Date().getFullYear();

    return monthNames[monthIndex] + ' ' + year;
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {!this.props.userIncome ? <Loading /> :
          <div>
            <div className="row">
              <div className="col">
                <div className="card">
                  <div class="card-header">
                    <h1 className="text-center">Summary</h1>
                  </div>
                  <div className="d-flex">
                    <div className="card-body">
                      <h5 className="card-title">{this.dateMonth()}</h5>
                      <hr />
                      <h6>Incomes: </h6><h6 className="text-success d-inline">{this.props.userSumIncome} Ft</h6>
                      <h6>Expenses: </h6><h6 className="text-danger d-inline">{this.props.userSumExpense} Ft</h6>
                      <h6>Summary: </h6><h6 className="font-weight-bold d-inline">{this.props.userSumIncome - this.props.userSumExpense} Ft</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div class="card-header">
                    <h1 className="text-center">Expenses last 7 days</h1>
                  </div>
                  <div className="d-flex">
                    <div className="card-body">
                      <h5 className="card-title">{this.dateMonth()}</h5>
                      <hr />
                      <h6>Incomes: <h6 className="text-success d-inline">{this.props.userSumIncome} Ft</h6></h6>
                      <h6>Expenses: <h6 className="text-danger d-inline">{this.props.userSumExpense} Ft</h6></h6>
                      <h6>Summary: <h6 className="font-weight-bold d-inline">{this.props.userSumIncome - this.props.userSumExpense} Ft</h6></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">

              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  userId: store.userReducer.userId,
  userIncome: store.userBalance.income,
  userExpense: store.userBalance.expense,
  userBudget: store.userBalance.budget,
  userDebit: store.userBalance.debit,
  userSumIncome: store.userBalance.sumIncome,
  userSumExpense: store.userBalance.sumExpense,
});

const mapDispatchToProps = {
  getAllUserInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
