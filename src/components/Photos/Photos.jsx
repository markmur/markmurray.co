import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-firebasev3';
import moment from 'moment';

import Project from 'Project/Project';
const { dataToJS, pathToJS } = helpers;


const propTypes = {};
const defaultProps = {};

const mapStateToProps = ({ firebase }) => ({

});

@firebase()
@connect(mapStateToProps)
class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div class="Photos">
        <img src="/public/images/baybridge.jpg" role="presentation" />
        <img src="/public/images/berkeleycat.jpg" role="presentation" />
        <img src="/public/images/berkeleyhills.jpg" role="presentation" />
        <img src="/public/images/eoinbokeh.jpg" role="presentation" />
        <img src="/public/images/makeup.jpg" role="presentation" />
        <img src="/public/images/motoroway.jpg" role="presentation" />
        <img src="/public/images/silhouette.jpg" role="presentation" />
        <img src="/public/images/twinpeaks.jpg" role="presentation" />
        <img src="/public/images/twinpeakscar.jpg" role="presentation" />
        <img src="/public/images/vangough.jpg" role="presentation" />
        <img src="/public/images/venicebeach.jpg" role="presentation" />
      </div>
    );
  }
}

Photos.defaultProps = defaultProps;
Photos.propTypes = propTypes;

export default Photos;
