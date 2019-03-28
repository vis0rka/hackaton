import React, { Component } from 'react';
import Loading from '../../Components/Loading/Loading';
import { connect } from 'react-redux';
import { getAllUserInfo } from '../../actions/actions';
import Expensecard from '../../Components/ExpenseCard/Expensecard';

class Homepage extends Component {

  componentDidMount = () => {
    this.props.getAllUserInfo("5c9ca6490650e135a4634b47");
    console.log(this.sevenDaysBefore());
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

  sevenDaysBefore = () => {
    const d = Date.now();
    const sevenDays = d - (7 * 24 * 60 * 60 * 1000);
    console.log(sevenDays)
    return sevenDays;
  }

  returnTimefromDate = date => (new Date(date).toLocaleDateString());

  render() {
    return (
      !this.props.userIncome ? <Loading /> :
        <div className="container" onClick={this.sevenDaysBefore}>
          <div className="row w-100">
            <div className="col">
              <div className="card">
                <div className="card-header">
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
          <div className="row pt-3 w-100">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h2 className="text-center">Expenses last 7 days</h2>
                </div>
                <div className="d-flex">
                  <div className="card-body">
                    {
                      this.props.userExpense
                        .filter(item => item.date > this.sevenDaysBefore())
                        .map(element => {
                          return (
                            <Expensecard
                              category={element.category}
                              amount={element.amount}
                              date={this.returnTimefromDate(element.date)}
                            />
                          )
                        })
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h2 className="text-center">Budgets</h2>
                </div>
                <div className="d-flex">
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
          </div>
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
