import { stat } from "fs";
import _ from "lodash";


const userBalance = (
  state = {
    isError: false,
    errMessage: '',
    income: [],
    expense: [],
    budget: [],
    debit: [],
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
    case 'SAVE_DEBIT_SUCCEEDED': {
      console.log("reducer", action);
      return {
        ...state,
        debit: [...state.debit, action.debit]
      }
    }
    case 'SAVE_INCOME_SUCCEEDED': {
      console.log("reducer", action);
      return {
        ...state,
        income: [...state.income, action.income]
      }
    }
    case 'SAVE_EXPENSE_SUCCEEDED': {
      console.log("reducer", action);
      return {
        ...state,
        expense: [...state.expense, action.expense]
      }
    }
    case 'SAVE_BUDGET_SUCCEEDED': {
      console.log("reducer", action);
      return {
        ...state,
        budget: [...state.budget, action.budget]
      }
    }
    case 'DELETE_EXPENSE': {
      console.log("reducer", action);
      return {
        ...state,
        expense: [...state.expense, action.expense]
      }
    }

    default:
      return state
  }
}

export default userBalance;
