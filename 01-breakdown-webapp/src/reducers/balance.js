import { stat } from "fs";

const userBalance = (
  state = {
    isError: false,
    errMessage: '',
    income: null,
    expense: null,
    budget: null,
    debit: null,
    sumIncome: null,
    sumExpense: null,
    balance: null,
  },
  action
) => {
  switch (action.type) {
    case 'GET_USER_INFO_SUCCEEDED': {
      return {
        ...state,
        income: action.payload.income,
        expense: action.payload.expense,
        budget: action.payload.budget.map(item => {
          let temp = {
            _id: item._id,
            maxValue: item.maxValue,
            category: item.category,
            balance: item.maxValue,
          }
          action.payload.expense.forEach(element => {
            if (item.category == element.category) {
              temp.balance -= element.amount
            } 
          })
          return temp
        }),
        debit: action.payload.debit,
        sumIncome: action.payload.income.reduce(function (sum, item) {
          return sum + item.amount;
        }, 0),
        sumExpense: action.payload.expense.reduce(function (sum, item) {
          return sum + item.amount;
        }, 0),
      };
    }
    case 'GET_USER_INFO_FAILED': {
      return {
        ...state,
        isError: true,
        errMessage: action.payload,
      }
    }
    default:
      return state
  }
}

export default userBalance;
