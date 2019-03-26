import rootReducer from '../reducers/index'
import createHistory from 'history/createBrowserHistory';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import sayHelloSaga from '../sagas/sagas'

export const history = createHistory();

const reactRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  reactRouterMiddleware,
];

const Store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
));

sagaMiddleware.run(sayHelloSaga);

export default Store;
