import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-firebasev3';
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
      <div class="Photos"></div>
    );
  }
}

Photos.defaultProps = defaultProps;
Photos.propTypes = propTypes;

export default Photos;
