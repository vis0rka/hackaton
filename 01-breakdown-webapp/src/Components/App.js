import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheet/App.css';
import LandingPage from '../Containers/LandingPage/LandingPage';
import MainPage from '../Containers/MainPage/MainPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faMoneyBill, faWallet, faAlignLeft, faHandHoldingUsd, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faMoneyBill, faWallet, faAlignLeft, faHandHoldingUsd, faSignOutAlt);

const App = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/mainpage' component={MainPage} />
  </Switch>
)
export default App;
