import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import helloworld from './hello-word';
import userReducer from './user';
import userBalance from './balance';

const rootReducer = combineReducers({
  userBalance,
  userReducer,
  helloworld,
  routing: routerReducer,
});

export default rootReducer;