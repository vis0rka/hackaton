import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserLogin, sendUserRegister, clearErrorMessage, clearLoginStatus } from '../../actions/actions';

class LandingPage extends Component {
  state = {
    signUp: false,
  }

  componentDidMount = () => {
    this.props.clearLoginStatus();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isLogdin) {
      this.props.history.push('/mainpage/home');
    }
  }

  onToggle = (event) => {
    if (event.target.classList.contains('signUp')) {
      this.setState({ signUp: false })
    } else if (event.target.classList.contains('signIn')) {
      this.setState({ signUp: true })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('signUpForm')) {
      const { regName, regPassword } = event.target.elements;
      this.props.sendUserRegister(regName.value, regPassword.value);
    } else if (event.target.classList.contains('signInForm')) {
      const { logName, logPassword } = event.target.elements;
      this.props.sendUserLogin(logName.value, logPassword.value);
    }
  }

  handleChange = () => {
    const { clearErrorMessage } = this.props;
    clearErrorMessage();
  }

  render() {
    return (
      <div className="container-fluid bg-warning landing-wrapper">
        <div className="mx-auto my-auto d-flex flex-column align-items-center justify-content-around m-2">
          <div className="landing-heading w-50 mt-4">
            <h1 className="text-center text-light">My second wallet</h1>
            <p className="text-center text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis auctor nunc finibus accumsan. Aliquam elementum a nisi vitae pharetra. Aliquam erat volutpat. Fusce quis dictum dolor. Nunc vehicula dolor porta mollis egestas. Integer convallis tortor id tincidunt maximus. Etiam odio mauris, vehicula eget odio quis, commodo iaculis erat. Morbi semper egestas imperdiet. Praesent at vestibulum leo. Integer facilisis justo vitae semper finibus.</p>
          </div>
          <div className={this.state.signUp ? 'container-lg-reg' : 'container-lg-reg right-panel-active'} onClick={this.onToggle}>
            <div className="form-container sign-up-container">
              <form onSubmit={this.handleSubmit} className="signUpForm">
                <div className="form-header">
                  <h1>Create Account</h1>
                </div>
                <div className="form-inputs">
                  <input className="form-control" type="text" placeholder="Name" id="regName" onChange={this.handleChange}/>
                  {this.props.isError ? <div className="error"><p className="text-danger">{this.props.errMessage}</p></div> : null}
                  <input className="form-control" type="password" placeholder="Password" id="regPassword" />
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form onSubmit={this.handleSubmit} className="signInForm">
                <div className="form-header">
                  <h1>Sign in</h1>
                </div>
                <div className="form-inputs">
                  <input className="form-control" type="name" placeholder="Name" id="logName" onChange={this.handleChange}/>
                  {this.props.isError ? <div className="error"><p className="text-danger">{this.props.errMessage}</p></div> : null}
                  <input className="form-control" type="password" placeholder="Password" id="logPassword" />
                </div>
                <button type="submit">Sign In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal info
                </p>
                  <button className="ghost signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button className="ghost signUp">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  isError: store.userReducer.isError,
  errMessage: store.userReducer.errMessage,
  isLogdin: store.userReducer.isLogdin,
});

const mapDispatchToProps = {
  sendUserLogin,
  sendUserRegister,
  clearErrorMessage,
  clearLoginStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

