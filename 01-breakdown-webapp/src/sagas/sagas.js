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

export default function* rootSaga() {
  yield takeEvery('HELLO_WORLD_REQUESTED', sayHelloSaga);
  yield takeEvery('HELLO_WORLD_SAGA_REQUESTED', HelloSaga);
  yield takeEvery('USER_REG_REQUESTED', register);
  yield takeEvery('USER_LOGIN_REQUESTED', login);
  yield takeEvery('GET_ALL_USER_INFO_REQUESTED', getUserInfo)
}