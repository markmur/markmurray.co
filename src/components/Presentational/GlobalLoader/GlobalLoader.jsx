import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

const defaultProps = {
  message: 'Loading...',
  loading: true
};

function GlobalLoader(props) {

  if (!props.loading) return null;

  return (
    <div class="GlobalLoader">
      {props.message}
    </div>
  );
}

GlobalLoader.propTypes = propTypes;

GlobalLoader.defaultProps = defaultProps;

export default GlobalLoader;
