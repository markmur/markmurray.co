import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer as ProjectsConsumer } from '../context/ProjectsProvider'

import Project from './Project'

class Projects extends Component {
  static propTypes = {
    onProjectClick: PropTypes.func
  }

  static defaultProps = {
    onProjectClick() {}
  }

  render() {
    return (
      <div className="Projects-container">
        <div className="projects">
          <ProjectsConsumer>
            {({ projects }) =>
              projects.map(project => (
                <Project
                  key={project.id}
                  project={project}
                  onClick={this.props.onProjectClick}
                />
              ))
            }
          </ProjectsConsumer>
        </div>
      </div>
    )
  }
}

export default Projects
