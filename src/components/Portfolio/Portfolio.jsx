import React, { Component } from 'react';
import { metrics } from 'react-metrics';
import { Link } from 'react-router';
import config from 'config/metrics';
import classNames from 'classnames';
import { firebase } from 'redux-firebasev3';

import Menu from 'Menu/Menu';
import Projects from 'Projects/Projects';
import GlobalLoader from 'GlobalLoader/GlobalLoader';

@metrics(config)
@firebase()
class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

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
