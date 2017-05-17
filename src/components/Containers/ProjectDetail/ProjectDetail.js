import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-firebasev3';
import Markdown from 'react-markdown';

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
        <Markdown source={project.body} />
      </div>
    );
  }
}

ProjectDetail.defaultProps = {};
ProjectDetail.propTypes = {};

export default ProjectDetail;
