import React, { Component } from 'react';
import Loading from '../../Components/Loading/Loading';
import { connect } from 'react-redux';
import {getAllUserInfo} from '../../actions/actions'
class Homepage extends Component {

  componentDidMount = () => {
    this.props.getAllUserInfo("5c9ca6490650e135a4634b47");
  }

  handleClick = () => {
    console.log(this.props.userIncome, this.props.userExpense)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
      {!this.props.userIncome ? <Loading /> : (
        <div>
          <h1>megjött az adat</h1>
        </div>
      )}
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
});

const mapDispatchToProps = {
  getAllUserInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
