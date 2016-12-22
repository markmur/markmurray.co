import React, { Component } from 'react';
import { metrics } from 'react-metrics';
import config from 'config/metrics';
import classNames from 'classnames';

import Menu from 'Menu/Menu';

@metrics(config)
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
          'nav-open': this.state.navOpen
        })}>

        <Menu
          onOpen={() => this.setState({ navOpen: false })}
          onClose={() => this.setState({ navOpen: true })} />

        <section class="main-content">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Portfolio;
