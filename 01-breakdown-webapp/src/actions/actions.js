export const getHelloWorld = () => ({
  type: 'HELLO_WORLD_REQUESTED',
});

export const getHelloWorldSaga = () => ({
  type: 'HELLO_WORLD_SAGA_REQUESTED',
});

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