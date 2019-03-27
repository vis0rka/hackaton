import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheet/App.css';
import LandingPage from '../Containers/LandingPage/LandingPage';


const App = () => (
  <Switch>
    <Route path='/' component={LandingPage} />
  </Switch>
)
export default App;
