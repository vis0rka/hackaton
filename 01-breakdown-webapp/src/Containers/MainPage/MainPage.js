import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHelloWorld, getHelloWorldSaga } from '../../actions/actions';

class MainPage extends Component {
  componentDidMount() {
    const { getHelloWorld, getHelloWorldSaga } = this.props;
    getHelloWorld();
    getHelloWorldSaga();
  }

  render() {
    const { helloWorldRedux, helloWorldSaga } = this.props;
    return (
      <div>
        {helloWorldRedux ? (
          <div>
            <p>Redux action: {helloWorldRedux}</p>
          </div>
        ) : null
        }
        {!helloWorldSaga ? (
          <p>...loading</p>
        ) : <p>Saga action: {helloWorldSaga}</p>
        }
      </div>
    );
  }
}


const mapStateToProps = store => ({
  helloWorldRedux: store.helloworld.say_hi,
  helloWorldSaga: store.helloworld.say_hi_saga,
});

const mapDispatchToProps = {
  getHelloWorld,
  getHelloWorldSaga,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
