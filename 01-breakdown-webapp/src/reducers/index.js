import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import helloworld from './hello-word';
import userReducer from './user'

const rootReducer = combineReducers({
  userReducer,
  helloworld,
  routing: routerReducer,
});

export default rootReducer;