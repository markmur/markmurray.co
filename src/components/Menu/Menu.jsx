import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Logo from 'Logo/Logo';

const propTypes = {
  active: PropTypes.string,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  onClick: () => {}
};

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  open() {
    this.setState({
      open: true
    }, () => this.props.onOpen());
  }

  close() {
    this.setState({
      open: false
    }, () => this.props.onClose());
  }

  toggle() {
    this.setState({
      open: !this.state.open
    }, () =>  {
      this.props[this.state.open ? 'onOpen' : 'onClose']();
    });
  }

  render() {
    return (
      <div class="Menu" onClick={() => this.toggle()}>
        <nav class={classNames({ open: this.state.open })}>
          <i id="MenuIcon" class="icon-rain" />

          <div class="nav-content">

            <div class="nav-menu">
              <menu class="navigation-menu hover-grow" type="toolbar">
                <li>
                  <Link to="/" onlyActiveOnIndex activeClassName="active">
                    <span class="number">01</span>
                    Index
                  </Link>
                </li>
                <li>
                  <Link to="/projects" activeClassName="active">
                    <span class="number">02</span>
                    Projects
                  </Link>
                </li>
              </menu>
            </div>

            <div class="nav-menu">
              <menu class="social-links-menu compact small" type="toolbar">
                <a target="_blank" href="https://twitter.com/markmur">@mrkmur</a>
                <a style={{ paddingLeft: '0.25em' }} target="_blank" href="https://instagram.com/markmur">Instagram</a>
                <a target="_blank" href="https://github.com/markmur">Github</a>
              </menu>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
