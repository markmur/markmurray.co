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
  projects: dataToJS(firebase, 'projects')
});

@firebase(['projects'])
@connect(mapStateToProps)
class Projects extends Component {

  formatProjects(projects) {
    if (!projects) return [];

    const categories = {};
    const publicProjects = projects.filter(project => project.public);

    Object.keys(publicProjects).reduce((obj, key) => {

      let project = publicProjects[key];

      if (project.type in categories) {
        obj[project.type].push(project);
      } else {
        obj[project.type] = [project];
      }

      return obj;
    }, categories);

    return categories;
  }

  render() {
    const projects = this.props.projects || {};
    const projectsArray = [];

    Object.keys(projects).forEach(key => projectsArray.push(projects[key]));

    const projectsByType = this.formatProjects(projectsArray);

    return (
      <div class="Projects-container">

        <Loader />

        <div class="projects">
          {projectsArray.sort((a, b) => a.type - b.type).map(project =>
            <Project
              key={project.id}
              project={project}
              onClick={this.props.onProjectClick} />
          )}
        </div>
      </div>
    );
  }
}

Projects.defaultProps = defaultProps;
Projects.propTypes = propTypes;

export default Projects;
