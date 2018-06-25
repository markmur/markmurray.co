import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../styles/media'

const Showcase = styled.div`
  position: relative;
  height: ${p => p.theme.projectShowcase.height};
  padding: 5em 3em;
  color: white;
  background-size: cover;
  background-position: center center;

  ${device.xs`height: inherit;padding: 3em 2em`};

  .content {
    position: relative;
    max-width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 10;

    @include devices(true) {
      max-width: 100%;
    }

    small.note {
      display: block;
      text-align: center;
      margin-bottom: 1em;
      font-style: italic;
      opacity: 0.6;
      font-size: 12px;
    }

    h1 {
      font-size: 3.025em;

      @include devices(true, true) {
        font-size: 2.325rem;
      }
    }

    button,
    a {
      display: flex;
      align-items: center;
      border-radius: 0;
      background: $pastel-green;
      color: white;
      text-align: right;
      text-transform: uppercase;
      width: 100%;
      margin-bottom: 1em;
      font-weight: 400;
      font-size: 13px;
      letter-spacing: 1.5px;
      padding: 0 2em;
      padding-right: 0;
      @include header-font;
      cursor: pointer;
      transition: padding 200ms, background 200ms;

      &:hover {
        padding-left: 3em;
        background: darken($pastel-green, 7.5%);

        i {
          padding: 1em 2em;
        }
      }

      i {
        margin-left: auto;
        padding: 1em;
        font-size: 16px;
        background: darken($pastel-green, 7.5%);
        transition: padding 200ms;
      }
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: $showcase-height;
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: $showcase-height;
  background-position: 0 center;
  background-size: cover;
  z-index: 2;
  width: 60%;
  height: 80vh;
  margin-top: auto;
  margin-left: auto;
  margin-bottom: auto;
  box-shadow: 0 0 24px 0 rgba(darken($black-pearl, 10%), 0.2);
  border-radius: 6px 0 0 6px;
`

const ProjectShowcase = props => {
  const { project } = props

  return (
    <Showcase>
      <Overlay />
      {project.background_image ? (
        <BackgroundImage
          style={{ backgroundImage: `url(${project.background_image})` }}
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
            Project Type: <strong className="capitalize">{project.type}</strong>
          </p>
        </div>
      </div>
    </Showcase>
  )
}

ProjectShowcase.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    caption: PropTypes.string,
    external_url: PropTypes.string
  }).isRequired
}

export default ProjectShowcase
