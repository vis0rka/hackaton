import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage/Homepage';
import IncomePage from '../IncomePage/Incomepage';
import Expensepage from '../Expensepage/Expensepage';
import Budgetpage from '../Budgetpage/Budgetpage';
import Debitpage from '../Debitpage/Debitpage';
class MainPage extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Navbar />
        <div className="container w-75 d-flex justify-content-center p-3 wrapperers">
          <Route path="/mainpage/home" component={HomePage}/>
          <Route path="/mainpage/income" component={IncomePage}/>
          <Route path="/mainpage/expense" component={Expensepage}/>
          <Route path="/mainpage/budget" component={Budgetpage}/>
          <Route path="/mainpage/debit" component={Debitpage}/>
        </div>
        <div id="bg">
          <img src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1522&q=80" alt="icons"></img>
        </div>
      </div>
    );
  }
}


const mapStateToProps = store => ({
  helloWorldRedux: store.helloworld.say_hi,
  helloWorldSaga: store.helloworld.say_hi_saga,
});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
