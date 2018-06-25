import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../styles/media'

const NavMenu = styled.menu`
  display: none;
  flex-wrap: wrap;

  li {
    width: 100%;

    a {
      font-size: 14px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin: 0.5em;
      height: 100px;
      background: lighten(var(--black-pearl), 2%);
      color: rgba(white, 0.8);
      text-align: right;
      padding: 1em;

      &:hover:not(.active) {
        color: white !important;
        font-weight: bold;

        span {
          color: white;
        }
      }

      &.active {
        color: white;
        background: $primary;
        font-weight: bold;
      }

      span {
        position: absolute;
        top: 0;
        left: 0;
        line-height: 1;
        margin: 8px;
        font-size: 3.25rem;
        color: lighten(var(--black-pearl), 4%);
        transition: color 200ms ease;
      }
    }
  }
`

const SocialMenu = styled.menu`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid rgba(var(--border-grey), 0.2);
  padding-top: 2em;
  margin: auto;
  text-align: center;
  height: 300px;

  a {
    display: block;
    color: rgba(white, 0.7);
    flex: 1;
    padding: 0.5em 0;
    overflow: hidden;
    margin: 0;
    text-align: left;
    transition: transform 300ms ease;
    will-change: transform;
    white-space: nowrap;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50px;
      left: 41%;
      width: 60px;
      height: 4px;
      background: #eee;
      transform: rotate3d(0, 0, 1, -45deg) scale3d(0, 1, 1);
      transform-origin: 0 50%;
      transition: transform 0.4s;
    }

    &.active::before {
      transform: rotate3d(0, 0, 1, -45deg) scale3d(1, 1, 1);
    }

    > span {
      opacity: 0;
      transition: opacity 100ms ease;
    }

    &:hover {
      color: white;
    }
  }
`

const Nav = styled.nav`
  position: fixed;
  width: ${p => (p.open ? p.theme.nav.open : p.theme.nav.closed)}px;
  background: var(--black-pearl);
  height: 100vh;
  display: flex;
  z-index: 1000;
  flex-direction: column;
  transition: width 200ms ease-in-out;
  will-change: width;

  #MenuIcon {
    padding: 0.45em 0.25em;
    color: white;
    font-size: 2.5em;
    opacity: 0.8;
    cursor: pointer;
    text-align: center;

    &:hover {
      opacity: 1;
    }
  }

  .nav-content {
    padding: 0 1em 2em;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .brand {
      .logo {
        margin: 0 auto 1em;
      }

      .tagline {
        font-weight: 300;
        color: var(--light-grey);
      }
    }
  }

  ${device.xs`
    height: 70px;
    width: 100%;
    transition: height 200ms ease-in-out;
    will-change: height;

    ${p =>
      p.open &&
      `
     width: 100%;
     height: 330px;

     .nav-content {
       padding: 0 1em 1em !important;
     }

     .nav-content {
       padding: 0 !important;
     }

     menu.social-links-menu {
       display: none !important;
     }
    `}
  `} ${p =>
    p.open &&
    `

    width: ${p => p.theme.nav.open};

    #MenuIcon {
      text-align: left;
    }

    menu.social-links-menu {
      height: inherit !important;

      a {
        padding: 0.5em;
        flex: 0 1 auto;
        text-align: left;

        span {
          opacity: 1;
        }
      }
    }

    menu.navigation-menu {
      display: flex;
    }`};
`

const propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func
}

const defaultProps = {
  onOpen: () => {},
  onClose: () => {}
}

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/mrkmur', icon: 'twitter' },
  {
    name: 'Instagram',
    url: 'https://instagram.com/markmur',
    icon: 'instagram'
  },
  { name: 'Github', url: 'https://github.com/markmur', icon: 'github' },
  { name: 'Dribbble', url: 'https://dribbble.com/markmur', icon: 'dribbble' }
]

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
      this.props.onClose
    )
  }

  toggle() {
    this.setState(
      ({ open }) => ({
        open: !open
      }),
      () => {
        this.props[this.state.open ? 'onOpen' : 'onClose']()
      }
    )
  }

  render() {
    return (
      <div className="Menu" onClick={() => this.toggle()}>
        <Nav open={this.state.open}>
          <i id="MenuIcon" className="icon-rain" />

          <div className="nav-content">
            <div className="nav-menu">
              <NavMenu type="toolbar">
                <li>
                  <Link to="/" onlyActiveOnIndex activeClassName="active">
                    <span className="number">01</span> Index
                  </Link>
                </li>
                <li>
                  <Link to="/projects" activeClassName="active">
                    <span className="number">02</span> Projects
                  </Link>
                </li>
              </NavMenu>
            </div>

            <SocialMenu type="toolbar">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                >
                  <i className={`entypo-${link.icon}`} />{' '}
                  <span>/ {link.name}</span>
                </a>
              ))}
            </SocialMenu>
          </div>
        </Nav>
      </div>
    )
  }
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps

export default Menu
