const userReducer = (
  state = {
    isLogdin: false,
    isError: false,
    username: '',
    userId: '',
    errMessage: '',
    regSucces: false,
  },
  action
) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCEEDED': {
      console.log(action)
      return {
        ...state,
        isLogdin: true,
        username: action.payload.username,
        userId: action.payload.userId
      };
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        isError: true,
        errMessage: action.payload,
        isLogdin: false,
      }
    }
    case 'REGISTER_FAILED': {
      return {
        ...state, 
        isError: true,
        errMessage: action.payload,
        regSucces: false,
      }
    }
    case 'USER_REG_SUCCEEDED': {
      return {
        ...state,
        isError: false, 
        regSucces: true, 
        isLogdin: true, 
        username: action.payload.username,
        userId: action.payload.userId
      }
    }
    case 'USER_ERROR_MESSAGE_CLEAR': {
      return {
        ...state,
        isError: false,
        errMessage: null,
      }
    }
    default:
      return state
  }
}

export default userReducer;
