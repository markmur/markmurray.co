import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-firebasev3';
import { metrics } from 'react-metrics';
import config from 'config/metrics';

const { pathToJS } = helpers;

import Menu from 'Menu/Menu';

@metrics(config)
@firebase()
@connect(
  // Map State to Props
  ({ firebase }) => {

    const profile = pathToJS(firebase, 'auth') || {};
    const { displayName, email, photoURL } = profile;

    if (Object.keys(profile).length) {
      return {
        profile: { displayName, email, photoURL }
      };
    } else return {};
  }
)
class Portfolio extends Component {

  render() {
    return (
      <div class="Portfolio site-content">

        <Menu />

        <section class="main-content">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Portfolio;
