import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-firebasev3';
const { dataToJS } = helpers;

import ProjectShowcase from 'ProjectShowcase/ProjectShowcase';
import GlobalLoader from 'GlobalLoader/GlobalLoader';

import img from 'images/mark.jpg';

const propTypes = {
  projects: PropTypes.object
};

const defaultProps = {
  projects: {}
};

const mapStateToProps = ({ firebase }) => ({
  projects: dataToJS(firebase, 'projects') || {}
});

@firebase(['projects'])
@connect(mapStateToProps)
class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  getPublicProjects(projects = []) {
    if (!projects.length) return projects;

    return projects
      .filter(project => project.showcase)
      .sort((a, b) => a.order - b.order);
  }

  render() {

    const projects =
      this.getPublicProjects(
        Object.keys(this.props.projects).map(x => this.props.projects[x])
      );

    return (
      <div class="homepage">

        <GlobalLoader
          message="Loading Project Showcase..."
          loading={!projects.length} />

        <div class="Index" style={{ backgroundImage: `url(${img})` }}>
          <div class="rekt" />
          <div class="IndexOverlay" />
          <div class="IndexContent">
            <h2>Mark Murray</h2>
            <p>Front End Developer /</p>
            <p>UI Designer</p>

            <small>
              Twenty-something year old Front-End Developer and UI Designer from
              Ireland, living in San Francisco, trying to figure out what to do with his life.
              Currently working full-time for <a target="_blank" href="https://boxfish.com">Boxfish</a>.

              <br /><br /> You can contact me at <a href="mailto:hello@markmurray.co">hello@markmurray.co</a>
            </small>
          </div>
        </div>

        {projects.map(project =>
          <ProjectShowcase
            key={project.id}
            project={project} />
        )}

        <div
          style={{
            padding: '5em 2em 7em',
            textAlign: 'center',
            color: 'white'
          }}>

          <p
            style={{
              color: 'white',
              padding: '2em 0',
              fontSize: '1.15em'
            }}>
            Looking for a Full-Stack / Front-End Developer or UI Designer? <br />
            Reach out to me at <a href="mailto:hello@markmurray.co">hello@markmurray.co</a>.
          </p>

          <Link
            class="button blue"
            to="/projects"
            style={{
              margin: 'auto'
            }}>
            View All Projects <i class="icon-go" />
          </Link>
        </div>
      </div>
    );
  }
}

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;

export default Index;
