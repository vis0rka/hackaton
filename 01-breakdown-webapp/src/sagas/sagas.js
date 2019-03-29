import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';

function* sayHelloSaga() {
  yield console.log('Say hello'); //eslint-disable-line
}

function* HelloSaga() {
  try {
    const response = yield call(API.HelloWorldApi);
    yield put({
      type: 'HELLO_WORLD_SAGA_SUCCEEDED',
      payload: response.name,
    });
  } catch (error) {
    yield put({
      type: 'HELLO_WORLD_SAGA_FAILED',
    });
    console.log(error); // eslint-disable-line
  }
}

function* register(action) {
  try {
    const response = yield call(API.postData, action.payload, 'http://localhost:4000/register');
    console.log(response)
    if (response.error) {
      yield put({
        type: 'REGISTER_FAILED',
        payload: response.error,
      });
    } else {
      yield put({
        type: 'USER_REG_SUCCEEDED', 
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: 'REGISTER_FAILED',
    });
    console.log(error) // eslint-disable-line
  }
};

function* login(action) {
  try {
    const response = yield call(API.postData, action.payload, 'http://localhost:4000/login');
    console.log(response)
    if (response.message) {
      yield put({
        type: 'LOGIN_FAILED',
        payload: response.message,
      });
    } else {
      yield put({
        type: 'USER_LOGIN_SUCCEEDED',
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: 'LOGIN_FAILED',
    });
    console.log(error); // eslint-disable-line
  }
}

function* getUserInfo(action) {
  try {
    const response = yield call(API.postData, action.payload, 'http://localhost:4000/allaboutuser');
    console.log(response)
    if (response.message) {
      yield put({
        type: 'GET_USER_INFO_FAILED',
        payload: response.message,
      });
    } else {
      yield put({
        type: 'GET_USER_INFO_SUCCEEDED',
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: 'GET_USER_INFO_FAILED',
    });
    console.log(error); // eslint-disable-line
  }
}

function* saveDebit(action) {
  try {
    action.data.userId = '5c9ca6490650e135a4634b47';
    const debit = yield call(API.postData, action.data, 'http://localhost:4000/debit');

    if (!debit) {
      console.log(debit)
      // debit example: {_id: "5c9d55b95c90b7b2da0d6a6b", amount: 123, date: 1553814969096, __v: 0}
      yield put({
        type: 'SAVE_DEBIT_FAILED',
        // payload: response.message,
      });
    } else {
      yield put({
        type: 'SAVE_DEBIT_SUCCEEDED',
        debit,
      });
     }
  } catch (error) {
    yield put({
      type: 'SOMETHING WENT WRONG',
    });
    console.log(error); // eslint-disable-line
  }
}

function* saveIncome(action) {
  try {
    action.data.userId = '5c9ca6490650e135a4634b47';
    const income = yield call(API.postData, action.data, 'http://localhost:4000/income');
    
    if (!income) {
      console.log(income)
      // received income: {description: "kiscica", _id: "5c9d660f1d494ac8ecdd0939", amount: 12345, date: 1553819151626, __v: 0}
      yield put({
        type: 'SAVE_INCOME_FAILED',
        // payload: response.message,
      });
    } else {
      yield put({
        type: 'SAVE_INCOME_SUCCEEDED',
        income,
      });
     }
  } catch (error) {
    yield put({
      type: 'SOMETHING WENT WRONG',
    });
    console.log(error); // eslint-disable-line
  }
}

function* saveExpense(action) {
  try {
    action.data.userId = '5c9ca6490650e135a4634b47';
    const expense = yield call(API.postData, action.data, 'http://localhost:4000/expenses');
    
    if (!expense) {
      console.log(expense)
      // received expense: {_id: "5c9d68e3dd9c8dc966d533b1", amount: 123, category: "car", date: 1553819875571, __v: 0}
      yield put({
        type: 'SAVE_EXPENSE_FAILED',
        // payload: response.message,
      });
    } else {
      yield put({
        type: 'SAVE_EXPENSE_SUCCEEDED',
        expense,
      });
     }
  } catch (error) {
    yield put({
      type: 'SOMETHING WENT WRONG',
    });
    console.log(error); // eslint-disable-line
  }
}

function* saveBudget(action) {
  try {
    action.data.userId = '5c9ca6490650e135a4634b47';
    const budget = yield call(API.postData, action.data, 'http://localhost:4000/budget');
    
    if (!budget) {
      console.log(budget)
      // received budget: {_id: "5c9d6a81dd9c8dc966d533b2", maxValue: 12000, category: "clothes", __v: 0}
      yield put({
        type: 'SAVE_BUDGET_FAILED',
        // payload: response.message,
      });
    } else {
      yield put({
        type: 'SAVE_BUDGET_SUCCEEDED',
        budget,
      });
     }
  } catch (error) {
    yield put({
      type: 'SOMETHING WENT WRONG',
    });
    console.log(error); // eslint-disable-line
  }
}


export default function* rootSaga() {
  yield takeEvery('HELLO_WORLD_REQUESTED', sayHelloSaga);
  yield takeEvery('HELLO_WORLD_SAGA_REQUESTED', HelloSaga);
  yield takeEvery('USER_REG_REQUESTED', register);
  yield takeEvery('USER_LOGIN_REQUESTED', login);
  yield takeEvery('GET_ALL_USER_INFO_REQUESTED', getUserInfo);
  yield takeEvery('SEND_DEBIT', saveDebit);
  yield takeEvery('SEND_INCOME', saveIncome);
  yield takeEvery('SEND_EXPENSE', saveExpense);
  yield takeEvery('SEND_BUDGET', saveBudget);
}