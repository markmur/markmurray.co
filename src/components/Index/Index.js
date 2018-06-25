import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProjectShowcase, GlobalLoader } from '..'
import img from '../../images/mark.jpg'
import { device } from '../../styles/media'
import { load } from '../../services'

const Hero = styled.div`
  position: relative;
  background-size: cover;
  background-position: center center;

  ${device.xs`
    height: 100%;
    flex: 1;

    .IndexContent {
      padding: 1.5em !important;
      height: calc(100vh - #{$nav-width}) !important;
      flex: 1;

      h2 {
        font-size: 2rem !important;
      }

      p {
        font-size: 2rem !important;
      }

      small {
        max-width: 100% !important;
        font-size: 1rem !important;
      }
    }`} .rekt {
    position: absolute;
    width: 372px;
    border: 20px solid;
    z-index: 3;
    margin-top: 7%;
    margin-left: 9%;
    height: 80vh;
    opacity: 0.15;

    @include xs-device {
      display: none;
    }
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  padding: 3em 5em;
  text-align: left;
  z-index: 10;
  color: white;

  a {
    color: white;
    border-bottom: 1px solid;
    cursor: pointer;
  }

  h2 {
    color: white;
    text-align: left;
    font-family: 'Satisfy', sans-serif;
    font-size: 3rem;
  }

  p {
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    color: var(--pastel-green);
    margin: 0;
    text-align: left;
    font-family: 'Helvetica', sans-serif;
    line-height: 1.25;
  }

  small {
    display: block;
    margin-top: 1em;
    font-size: 1.1em;
    max-width: 35vw;
    color: darken(white, 30%);
  }
`

const HeroOverlay = styled.div`
  background: rgba(31, 37, 41, 0.9);
  background: linear-gradient(90deg, #1f2529, rgba(18, 21, 24, 0.8));
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  transition: opacity 0.15s ease-out;
  z-index: 2;
`

class Index extends Component {
  getPublicProjects(projects = []) {
    if (projects.length <= 0) return projects

    return projects
      .filter(project => project.showcase)
      .sort((a, b) => a.order - b.order)
  }

  render() {
    const projects = this.getPublicProjects(
      Object.keys(this.props.projects).map(x => this.props.projects[x])
    )

    return (
      <div>
        <GlobalLoader
          message="Loading Project Showcase..."
          loading={!projects.length}
        />

        <Hero style={{ backgroundImage: `url(${img})` }}>
          <div className="rekt" />
          <HeroOverlay />
          <HeroContent>
            <h2>Mark Murray</h2>
            <p>Front End Developer /</p>
            <p>UI Designer</p>

            <small>
              Twenty-something year old Front-End Developer and UI Designer from
              Ireland, trying to figure out what to do with his life. Currently
              working full-time for{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zalando.ie"
              >
                Zalando
              </a>{' '}
              in Dublin, Ireland.
              <br />
              <br /> You can contact me at{' '}
              <a href="mailto:hello@markmurray.co">hello@markmurray.co</a>
            </small>
          </HeroContent>
        </Hero>

        {projects.map(project => (
          <ProjectShowcase key={project.id} project={project} />
        ))}

        <div
          style={{
            padding: '5em 2em 7em',
            textAlign: 'center',
            color: 'white'
          }}
        >
          <p
            style={{
              color: 'white',
              padding: '2em 0',
              fontSize: '1.15em'
            }}
          >
            Looking for a Front-End Developer / UI Designer? <br />
            Reach out to me at{' '}
            <a href="mailto:hello@markmurray.co">hello@markmurray.co</a>.
          </p>

          <Link
            className="button blue"
            to="/projects"
            style={{
              margin: 'auto'
            }}
          >
            View All Projects <i className="icon-go" />
          </Link>
        </div>
      </div>
    )
  }
}

Index.defaultProps = {
  projects: {}
}

Index.propTypes = {
  projects: PropTypes.object
}

export default load('projects')(Index)
