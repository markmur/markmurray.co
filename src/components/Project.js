import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const fetchGithubProject = url => {
  const repoName = url.slice(url.lastIndexOf('/') + 1, url.length)

  fetch(`https://api.github.com/repos/markmur/${repoName}`).then(repo => {
    console.log(repo)
  })
}

const wrapProject = (project, content) => {
  if (!project.github_url && !project.external_url) {
    return (
      <Link
        data-metrics-event-name="projectClick"
        data-metrics-project-name={project.name}
        data-metrics-project-url={`/projects/${project.id}`}
        to={`/projects/${project.id}`}
      >
        {content}
      </Link>
    )
  }

  if (project.type === 'github' && project.github_url) {
    return (
      <a
        data-metrics-event-name="projectClick"
        data-metrics-project-name={project.name}
        data-metrics-project-url={project.github_url}
        target="_blank"
        rel="noopener noreferrer"
        href={project.github_url}
      >
        {content}
      </a>
    )
  }

  if (project.external_url) {
    return (
      <a
        data-metrics-event-name="projectClick"
        data-metrics-project-name={project.name}
        data-metrics-project-url={project.external_url}
        target="_blank"
        rel="noopener noreferrer"
        href={project.external_url}
      >
        {content}
      </a>
    )
  }
}

function Project(props) {
  const { project } = props

  if (!project.public) return null

  const projectContent = (
    <div className="project-content">
      {project.type === 'github' ? <small className="tag">Github</small> : null}

      {project.type === 'app' ? <small className="app tag">App</small> : null}

      {project.type === 'design' ? (
        <small className="design tag">Design</small>
      ) : null}

      <h2 className="project-title">{project.name}</h2>
      <small>{project.caption}</small>
    </div>
  )

  return (
    <div
      className="project"
      onClick={() => {
        if (typeof props.onClick === 'function') {
          props.onClick(project)
        }
      }}
    >
      {project.background_image ? (
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${project.background_image})`
          }}
        />
      ) : null}

      {props.onClick ? projectContent : wrapProject(project, projectContent)}
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string
  })
}

Project.defaultProps = {
  project: {}
}

export default Project
