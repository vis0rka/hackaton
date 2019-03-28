const userBalance= (
  state = {
    isError: false,
    errMessage: '',
    income: null,
    expense: null,
    budget:null,
    debit:null,
  },
  action
) => {
  switch (action.type) {
    case 'GET_USER_INFO_SUCCEEDED': {
      console.log(action)
      return {
        ...state,
        income: action.payload.income,
        expense: action.payload.expense,
        budget: action.payload.budget,
        debit:action.payload.debit,
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
