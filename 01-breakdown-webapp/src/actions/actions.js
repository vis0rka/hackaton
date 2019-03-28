export const sendUserLogin = (username, password) => ({
  type: 'USER_LOGIN_REQUESTED',
  payload: {
    username,
    password,
  },
})

export const sendUserRegister = (username, password) => ({
  type: 'USER_REG_REQUESTED', 
  payload: {
    username, 
    password,
  },
})

export const clearErrorMessage = () => ({
  type: 'USER_ERROR_MESSAGE_CLEAR'
})

export const clearLoginStatus = () => ({
  type: 'USER_LOGIN_STATUS_CLEAR'
})

export const getAllUserInfo = (userId) => ({
  type: 'GET_ALL_USER_INFO_REQUESTED',
  payload: {
    userId
  }
})