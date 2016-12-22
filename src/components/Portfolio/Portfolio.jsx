import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-firebasev3';
import { metrics } from 'react-metrics';
import config from 'config/metrics';
import classNames from 'classnames';

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
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false
    };
  }

  render() {
    return (
      <div
        class={classNames('Portfolio site-content', {
          'nav-open': !this.state.navOpen
        })}>

        <Menu
          onOpen={() => this.setState({ navOpen: true })}
          onClose={() => this.setState({ navOpen: false })} />

        <section class="main-content">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Portfolio;
