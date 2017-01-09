import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-firebasev3';

import Project from 'Project/Project';
import Loader from 'Loader/Loader';

const { dataToJS, pathToJS } = helpers;

const propTypes = {
  onProjectClick: PropTypes.func
};

const defaultProps = {};

const mapStateToProps = ({ firebase }) => ({
  projects: dataToJS(firebase, 'projects'),
  user: pathToJS(firebase, 'auth')
});

@firebase(['projects'])
@connect(mapStateToProps)
class Projects extends Component {

  componentDidMount() {
    window.firebase = this.props.firebase;
  }

  formatProjects(projects) {
    if (!projects) return [];

    return Object.keys(projects)
      .map(project => Object.assign({}, projects[project], { id: project }))
      .filter(project => project.public)
      .sort((a, b) => a.order - b.order)
  }

  deleteProject(project) {
    this.props.firebase.remove(`/projects/${project.id}`);
  }

  render() {
    const { projects } = this.props;
    const projectsArray = this.formatProjects(projects);

    return (
      <div class="projects">

        <Loader />

        {projectsArray.map(project =>
          <Project
            key={project.id}
            project={project}
            onClick={this.props.onProjectClick}
            canDelete={this.props.user !== null}
            onDelete={this.deleteProject.bind(this)} />
        )}
      </div>
    );
  }
}

Projects.defaultProps = defaultProps;
Projects.propTypes = propTypes;

export default Projects;
