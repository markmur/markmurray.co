import React, { Component, PropTypes } from 'react';

import img from 'images/mark.jpg';

const propTypes = {};

const defaultProps = {};

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div class="Index" style={{ backgroundImage: `url(${img})` }}>
        <div class="IndexOverlay" />
        <div class="IndexContent">
          <h2>Mark Murray</h2>
          <p>Front End Developer /</p>
          <p>UI Designer</p>

          <small>Mark Murray is a Developer & Designer from Ireland living in San Francisco, where he works for <a href="http://boxfish.com">Boxfish</a>. Regular amateur Photographer, Musician and Coffee Drinker.</small>
        </div>
      </div>
    );
  }
}

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;

export default Index;
