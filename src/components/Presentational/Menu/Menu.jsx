import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

import SocialLinks from './SocialLinks';

const linkProps = {
  activeClassName: 'active'
};

const Menu = ({ open, onLinkClick, onAboutClick }) => (
  <nav class={classNames('Menu', { open })}>
    <div class={classNames('nav-content', { open })}>
      <menu class="navigation-menu" type="toolbar">
        <li>
          <Link onClick={onLinkClick} to="/" onlyActiveOnIndex {...linkProps}>Index</Link>
        </li>
        <li>
          <Link onClick={onLinkClick} to="/projects" {...linkProps}>Projects</Link>
        </li>
        <li>
          <a type="button" onClick={onAboutClick}>About</a>
        </li>
      </menu>

      <SocialLinks />
    </div>
  </nav>
);

Menu.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onAboutClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Menu;
