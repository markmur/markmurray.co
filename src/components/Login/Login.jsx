import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { firebase } from 'redux-firebasev3';

import Logo from 'Logo/Logo';

@firebase()
@connect()
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: false
    };

    this.props.firebase.auth().signOut();
  }

  login(event) {
    event.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;

    this.setState({
      loading: true,
      error: null
    });

    this.props.firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        this.setState({
          loading: false
        }, () => {
          browserHistory.replace('/projects');
        });
      })
      .catch((error) => {
        this.setState({
          error: 'Incorrect Username or Password',
          loading: false
        });
      });
  }

  render() {
    return (
      <div class="Login">

        <Logo size="3rem" />

        <form autoComplete="off">

          <input ref="username" autoComplete="off" type="text" placeholder="Username..." />
          <input ref="password" autoComplete="off" type="password" placeholder="Password..." />

          {this.state.error ?
            <div class="error-alert">
              {this.state.error}
            </div>
          : null}

          <input
            onClick={(event) => this.login(event)}
            type="submit"
            value={this.state.loading ? 'Logging In...' : 'Login'}
            />
        </form>
      </div>
    );
  }
}

export default Login;
