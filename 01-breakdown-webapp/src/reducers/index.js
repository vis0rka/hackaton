import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import helloworld from './hello-word';

const rootReducer = combineReducers({
  helloworld,
  routing: routerReducer,
});

export default rootReducer;