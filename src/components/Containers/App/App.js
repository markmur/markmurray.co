import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { metrics } from 'react-metrics';
import config from 'config/metrics';

import { Menu, Header, About } from 'components';

@metrics(config)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      aboutOpen: false
    };
  }

  render() {
    const { menuOpen, aboutOpen } = this.state;

    return (
      <div class="Portfolio site-content">

        <div class="lines">
          {[...new Array(5)].map(x => <div class="line" />)}
        </div>

        <Header
          location={this.props.location}
          menuOpen={menuOpen}
          aboutOpen={aboutOpen}
          onToggle={(state) => {
            if (aboutOpen) this.setState({ aboutOpen: false });
            else this.setState({ menuOpen: state });
          }}
          onLogoClick={() => this.setState(({ aboutOpen }) => ({
            aboutOpen: !aboutOpen
          }))} />

        <About
          open={aboutOpen} />

        <Menu
          onLinkClick={() => this.setState({
            menuOpen: false
          })}
          onAboutClick={() => this.setState({
            aboutOpen: true,
            menuOpen: false
          })}
          open={menuOpen} />

        <section class="main-content">
          {this.props.children}
        </section>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any
};

export default App;
