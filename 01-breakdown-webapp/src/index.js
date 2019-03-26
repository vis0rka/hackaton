import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';


render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));


serviceWorker.unregister();