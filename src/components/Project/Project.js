import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../styles/media'

const StyledProject = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  margin: 1em;
  flex: 0 0 calc(100% / 4 - 2em);
  height: 260px;
  background: #2a3238;
  border-radius: 4px;
  cursor: pointer;

  &:hover .project-image {
    opacity: 0.25;
  }

  &:hover {
    background: #2a3238;
  }

  .project-title {
    margin: 0;
    margin-bottom: 0.5em;
    line-height: 1.25;
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    color: white;
  }

  .project-content {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
    text-align: left;
    padding: 2em;
    color: white;
    font-size: 1rem;

    .tag {
      font-weight: bold;
      color: $green;

      &.app {
        color: $blue;
      }

      &.design {
        color: $pink;
      }
    }
  }

  .project-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    z-index: 2;
    opacity: 0;
    transition: opacity 100ms ease;
  }

  p {
    font-weight: 400;
    @include main-font;
    font-size: 13px;
    margin-bottom: 1em;
  }

  ${device.md`flex: 0 0 calc(100% / 3 - 2em)`};
  ${device.sm`flex: 0 0 calc(100% / 2 - 2em)`};
  ${device.xs`flex: inherit; width: 100%`};
`

// Const fetchGithubProject = url => {
//   const repoName = url.slice(url.lastIndexOf('/') + 1, url.length)
//
//   fetch(`https://api.github.com/repos/markmur/${repoName}`).then(repo => {
//     console.log(repo)
//   })
// }

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

const Project = props => {
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
    <StyledProject
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
    </StyledProject>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Project
