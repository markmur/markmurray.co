import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Consumer as ProjectsConsumer } from '../context/ProjectsProvider'
import ProjectShowcase from './ProjectShowcase'

class Index extends Component {
  render() {
    return (
      <div className="homepage">
        <div
          className="Index"
          style={{ backgroundImage: `url('static/images/mark.jpg')` }}
        >
          <div className="rekt" />
          <div className="IndexOverlay" />
          <div className="IndexContent">
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
                href="https://zalando.de"
              >
                Zalando
              </a>{' '}
              in Dublin, Ireland.
              <br />
              <br /> You can contact me at{' '}
              <a href="mailto:hello@markmurray.co">hello@markmurray.co</a>
            </small>
          </div>
        </div>

        <ProjectsConsumer>
          {({ projects }) =>
            projects
              .filter(x => x.showcase)
              .map(project => (
                <ProjectShowcase key={project.id} project={project} />
              ))
          }
        </ProjectsConsumer>

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

export default Index
