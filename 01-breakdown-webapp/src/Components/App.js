import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheet/App.css';
import MainPage from '../Containers/MainPage/MainPage';


const App = () => (
  <Switch>
    <Route path='/' component={MainPage} />
  </Switch>
)
export default App;
