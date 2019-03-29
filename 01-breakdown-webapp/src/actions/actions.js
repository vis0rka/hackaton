export const sendUserLogin = (username, password) => ({
  type: "USER_LOGIN_REQUESTED",
  payload: {
    username,
    password
  }
});

export const sendUserRegister = (username, password) => ({
  type: "USER_REG_REQUESTED",
  payload: {
    username,
    password
  }
});

export const clearErrorMessage = () => ({
  type: "USER_ERROR_MESSAGE_CLEAR"
});

export const clearLoginStatus = () => ({
  type: "USER_LOGIN_STATUS_CLEAR"
});

export const getAllUserInfo = userId => ({
  type: "GET_ALL_USER_INFO_REQUESTED",
  payload: {
    userId
  }
});

export const sendDebit = data => ({
  type: "SEND_DEBIT",
  data
});

export const sendIncome = data => ({
  type: "SEND_INCOME",
  data
});

export const sendExpense = data => ({
  type: "SEND_EXPENSE",
  data
});

export const sendBudget = data => ({
  type: "SEND_BUDGET",
  data
});

export const deleteExpense = data => ({
  type: "DELETE_EXPENSE",
  data
})

export const userBudgetCounter = () => ({
  type: "CALCULATE_USER_BUDGET",
})