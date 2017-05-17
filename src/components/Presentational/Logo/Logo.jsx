import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  size: PropTypes.string
};

const defaultProps = {
  size: '2rem'
};

function Logo(props) {
  return (
    <div id="Logo" style={{ fontSize: props.size }}>
      Mark Murray
    </div>
  );
}

Logo.propTypes = propTypes;

Logo.defaultProps = defaultProps;

export default Logo;
