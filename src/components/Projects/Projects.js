import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { load } from '../../services'
import { Flex } from 'grid-styled'

import { Project } from '..'

class Projects extends Component {
  formatProjects(projects) {
    if (!projects) return []

    const categories = {}
    const publicProjects = projects.filter(project => project.public)

    Object.keys(publicProjects).reduce((state, key) => {
      const project = publicProjects[key]

      if (project.type in categories) {
        state[project.type].push(project)
      } else {
        state[project.type] = [project]
      }

      return state
    }, categories)

    return categories
  }

  render() {
    const projects = this.props.projects || {}
    const projectsArray = []

    Object.keys(projects).forEach(key => projectsArray.push(projects[key]))

    return (
      <div className="Projects-container">
        <Flex wrap p="1em">
          {projectsArray
            .sort((a, b) => a.type - b.type)
            .map(project => (
              <Project
                key={project.id}
                project={project}
                onClick={this.props.onProjectClick}
              />
            ))}
        </Flex>
      </div>
    )
  }
}

Projects.defaultProps = {
  projects: [],
  onProjectClick() {}
}

Projects.propTypes = {
  projects: PropTypes.array,
  onProjectClick: PropTypes.func
}

export default load('projects')(Projects)
