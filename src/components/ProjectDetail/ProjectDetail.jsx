import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-react-firebase';

const propTypes = {};
const defaultProps = {};

const mapStateToProps = ({ firebase }, props) => ({
  project: helpers.dataToJS(firebase, `/projects/${props.params.id}`)
});

@firebase(props => ([`projects/${props.params.id}`]))
@connect(mapStateToProps)
class ProjectDetail extends Component {

  render() {

    const { project } = this.props;

    if (!project) return null;

    return (
      <div class="ProjectDetail">
        <header style={{ backgroundImage: `url(${project.image})` }}>
          <h1 class="text-center">{project.name}</h1>
        </header>

        <div class="container">
          <p>{project.caption}</p>
        </div>
      </div>
    );
  }
}

ProjectDetail.defaultProps = defaultProps;
ProjectDetail.propTypes = propTypes;

export default ProjectDetail;
