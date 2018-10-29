import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ProjectShowcase extends PureComponent {
  static defaultProps = {
    project: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      caption: PropTypes.string,
      external_url: PropTypes.string
    }).isRequired
  }

  static propTypes = {
    project: {}
  }

  render() {
    const { project } = this.props

    return (
      <div className="ProjectShowcase">
        <div className="ProjectShowcase--overlay" />
        {project.background_image ? (
          <div
            style={{ backgroundImage: `url(${project.background_image})` }}
            className="ProjectShowcase--background"
          />
        ) : null}
        <div className="content">
          <div className="ProjectShowcase--info">
            <h1>{project.name}</h1>
            <hr />
            <p>{project.caption}</p>
          </div>

          {project.background_image ? (
            <img
              className="xs-device-image"
              src={project.background_image}
              style={{
                marginTop: '1em',
                marginBottom: '1em',
                borderRadius: '4px'
              }}
            />
          ) : null}

          <div className="margin-top-auto">
            {/herokuapp/gi.test(project.external_url) ? (
              <small className="note italic">
                (Heroku apps can take up to 30 seconds for the server to wake)
              </small>
            ) : null}

            {project.external_url ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.external_url}
              >
                View Project <i className="icon-go" />
              </a>
            ) : null}

            <p>
              Project Type:{' '}
              <strong className="capitalize">{project.type}</strong>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectShowcase
