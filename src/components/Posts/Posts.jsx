import React, { Component, PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="Posts">
        Posts
      </div>
    );
  }
}

Posts.defaultProps = defaultProps;
Posts.propTypes = propTypes;

export default Posts;
