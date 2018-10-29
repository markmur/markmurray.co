import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const propTypes = {
  active: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
}

const defaultProps = {
  onOpen: () => {},
  onClose: () => {}
}

class Menu extends Component {
  state = {
    open: false
  }

  open() {
    this.setState(
      {
        open: true
      },
      this.props.onOpen
    )
  }

  close() {
    this.setState(
      {
        open: false
      },
      () => this.props.onClose()
    )
  }

  toggle() {
    this.setState(
      state => ({
        open: !state.open
      }),
      () => {
        this.props[this.state.open ? 'onOpen' : 'onClose']()
      }
    )
  }

  render() {
    return (
      <div className="Menu" onClick={() => this.toggle()}>
        <nav className={classNames({ open: this.state.open })}>
          <i id="MenuIcon" className="icon-rain" />

          <div className="nav-content">
            <div className="nav-menu">
              <menu className="navigation-menu hover-grow" type="toolbar">
                <li>
                  <Link onlyActiveOnIndex to="/" activeClassName="active">
                    <span className="number">01</span>
                    Index
                  </Link>
                </li>
                <li>
                  <Link to="/projects" activeClassName="active">
                    <span className="number">02</span>
                    Projects
                  </Link>
                </li>
              </menu>
            </div>

            <div className="nav-menu">
              <menu className="social-links-menu compact small" type="toolbar">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/mrkmur"
                >
                  <i className="entypo-twitter" /> <span>/ Twitter</span>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://instagram.com/markmur"
                >
                  <i className="entypo-instagram" /> <span>/ Instagram</span>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/markmur"
                >
                  <i className="entypo-github" /> <span>/ Github</span>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://dribbble.com/mrkmur"
                >
                  <i className="entypo-dribbble" /> <span>/ Dribbble</span>
                </a>
              </menu>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps

export default Menu
