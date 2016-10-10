import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { firebase } from 'redux-firebasev3';

@firebase()
@connect()
class Nav extends Component {

  logout() {
    this.props.firebase.auth()
      .signOut()
      .then(() => {
        browserHistory.push('/login');
      });
  }

  render() {
    if (!this.props.user) return null;

    return (
      <div class="Nav">
        <ul class="links">
          <li>
            <Link to="/projects/editor">
              Create New Project
            </Link>
          </li>
        </ul>
        <div class="user" onClick={() => this.logout()}>
          <a type="button">Logout</a>
        </div>
      </div>
    );
  }
}

export default Nav;
