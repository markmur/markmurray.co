import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const formatPathname = (pathname) => (
  pathname.replace('/', '')
);

const Header = ({ menuOpen, aboutOpen, onToggle, onLogoClick, ...props }) => (
  <header class={classNames('Header', { open: menuOpen, aboutOpen })}>
    <div>
      <div id="MenuIcon" onClick={() => onToggle(!menuOpen)}>
        <i class={menuOpen || aboutOpen ? 'icon-forbid' : 'icon-equal'} />
      </div>

      {formatPathname(props.location.pathname) && <h3 class="pathname" hidden={menuOpen}>
        {formatPathname(props.location.pathname)}
      </h3>}
    </div>
    <div onClick={onLogoClick} id="Logo">
      Mark Murray
    </div>
  </header>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  aboutOpen: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired
};

export default Header;
