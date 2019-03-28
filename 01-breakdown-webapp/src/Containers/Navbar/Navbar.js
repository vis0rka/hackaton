import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';

class Navbar extends Component {
  handleClick = (event) => {
    if(event.currentTarget.dataset.name) {
     this.props.history.push(`/mainpage/${event.currentTarget.dataset.name}`); 
    }
  }

  handleLogOut = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <nav className="main-menu" >
        <ul>
          <li>
            <button data-name="home" onClick={this.handleClick}>
              <i className="fa fa-home fa-2x"><FontAwesomeIcon icon="home"/></i>
              <span className="nav-text">
                Home
              </span>
            </button>
          </li>
          <li className="has-subnav">
            <button  data-name="income" onClick={this.handleClick}>
              <i className="fa fa-laptop fa-2x"><FontAwesomeIcon icon="wallet"/></i>
              <span className="nav-text">
                Incomes
                </span>
            </button>
          </li>
          <li className="has-subnav">
            <button  data-name="expense" onClick={this.handleClick}>
              <i className="fa fa-list fa-2x"><FontAwesomeIcon icon="money-bill"/></i>
              <span className="nav-text">
                Expenses
              </span>
            </button>
          </li>
          <li className="has-subnav">
            <button  data-name="budget" onClick={this.handleClick}>
              <i className="fa fa-folder-open fa-2x"><FontAwesomeIcon icon="align-left"/></i>
              <span className="nav-text">
                Budgets
              </span>
            </button>
          </li>
          <li>
            <button  data-name="debit" onClick={this.handleClick}>
              <i className="fa fa-bar-chart-o fa-2x"><FontAwesomeIcon icon="hand-holding-usd"/></i>
              <span className="nav-text">
                Debits
              </span>
            </button>
          </li>
          <li>
            <button onClick={this.handleLogOut}>
              <i className="fa fa-font fa-2x"><FontAwesomeIcon icon="sign-out-alt"/></i>
              <span className="nav-text">
                Logout
              </span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navbar); 
