import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'grid-styled'
import styled from 'styled-components'

import Project from './Project'

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
    const projects = Object.keys(this.props.projects).map(
      key => this.props.projects[key]
    )

    return (
      <Flex wrap p="1em">
        {projects.sort((a, b) => a.type - b.type).map(project => (
          <Project
            key={project.name}
            project={project}
            onClick={this.props.onProjectClick}
          />
        ))}
      </Flex>
    )
  }
}

Projects.defaultProps = {
  projects: [],
  onProjectClick() {}
}

Projects.propTypes = {
  projects: PropTypes.object,
  onProjectClick: PropTypes.func
}

export default styled(Projects)`
  background: white;
`
