import React, { Component } from 'react';

class LandingPage extends Component {
  state = {
    signUp: false,
  }

  onToggle = (event) => {
    if (event.target.classList.contains('signUp')) {
      this.setState({ signUp: false })
    } else if (event.target.classList.contains('signIn')) {
      this.setState({ signUp: true })
    }
  }

  render() {
    return (
      <div className="container-fluid bg-warning landing-wrapper">
        <div className="mx-auto my-auto d-flex flex-column align-items-center justify-content-around h-75">
          <div className="landing-heading w-50">
            <h1 className="text-center">Hackaton | Breakdown</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis auctor nunc finibus accumsan. Aliquam elementum a nisi vitae pharetra. Aliquam erat volutpat. Fusce quis dictum dolor. Nunc vehicula dolor porta mollis egestas. Integer convallis tortor id tincidunt maximus. Etiam odio mauris, vehicula eget odio quis, commodo iaculis erat. Morbi semper egestas imperdiet. Praesent at vestibulum leo. Integer facilisis justo vitae semper finibus.</p>
          </div>
          <div className={this.state.signUp ? 'container-lg-reg' : 'container-lg-reg right-panel-active'} onClick={this.onToggle}>
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
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

export default LandingPage;