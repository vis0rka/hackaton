import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheet/App.css';
import LandingPage from '../Containers/LandingPage/LandingPage';
import MainPage from '../Containers/MainPage/MainPage';


const App = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/mainpage' component={MainPage} />
  </Switch>
)
export default App;
