import React, { Component } from 'react'
import Markdown from 'react-markdown'

class ProjectDetail extends Component {
  render() {
    const { project } = this.props

    if (!project) return null

    return (
      <div className="ProjectDetail">
        <Markdown source={project.body} />
      </div>
    )
  }
}

export default ProjectDetail
