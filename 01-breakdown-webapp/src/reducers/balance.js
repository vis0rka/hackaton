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
      console.log(action.payload.income)
      return {
        ...state,
        income: action.payload.income,
        expense: action.payload.expense,
        budget: action.payload.budget,
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

    default:
      return state
  }
}

export default userBalance;
