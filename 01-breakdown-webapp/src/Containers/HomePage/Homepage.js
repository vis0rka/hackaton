import React, { Component } from 'react';
import Loading from '../../Components/Loading/Loading';
import { connect } from 'react-redux';
import { getAllUserInfo, userBudgetCounter } from '../../actions/actions';
import Expensecard from '../../Components/ExpenseCard/Expensecard';
import Budgetcard from '../../Components/BudgetCard/Budgetcard';
import PieChart from 'react-minimal-pie-chart';
require('./homepage.css');

class Homepage extends Component {

  componentDidMount = () => {
    this.props.getAllUserInfo("5c9ca6490650e135a4634b47");
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
    return sevenDays;
  }

  pieCalculator = () => {
    const sumExpense = this.props.userSumExpense + this.props.userSumDebit
    const ratio = Math.floor((sumExpense / this.props.userSumIncome) * 100)
    return  {
      income: (100 - ratio),
      ratio: ratio
    }
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
                    <div className="d-flex">
                      <div className="d-flex flex-column">
                        <div className="mt-2">
                          <h6 className="d-inline mt-2">Incomes: </h6><h6 className="text-success d-inline">{this.props.userSumIncome} HUF</h6>
                        </div>
                        <div className="mt-2">
                          <h6 className="d-inline mt-2">Expenses: </h6><h6 className="text-danger d-inline">{this.props.userSumExpense} HUF</h6>
                        </div>
                        <div className="mt-2">
                          <h6 className="d-inline mt-2">Debits: </h6><h6 className="text-danger d-inline">{this.props.userSumDebit} HUF</h6>
                        </div>

                      </div>
                      <div className="d-flex alig-items-center justify-content-center">
                        <PieChart
                          data={[
                            { title: 'One', value: this.pieCalculator().income, color: '#4c8c4a' },
                            { title: 'Two', value: this.pieCalculator().ratio, color: '#C13C37' },
                          ]}
                          style={{ height: '120px' }}
                        />
                        <div className="d-flex align-items-center justify-content-center left-margin-minus">
                          <span>
                        <h6 className="d-inline mt-2">Balance: </h6><h6 className="font-weight-bold d-inline">{this.props.userSumIncome - (this.props.userSumExpense + this.props.userSumDebit)} HUF</h6>
                          </span>
                        </div>
                      </div>
                    </div>
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
                              key={element._id}

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
                    {this.props.userBudget.map(element => {
                      return (
                        <Budgetcard
                          category={element.category}
                          key={element.id}
                          percentage={(element.balance / element.maxValue * 100)}
                          balance={element.balance}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
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
  userSumDebit: store.userBalance.sumDebit,
});

const mapDispatchToProps = {
  getAllUserInfo,
  userBudgetCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
