import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import { firebase, helpers } from 'redux-firebasev3';
import classNames from 'classnames';

const { dataToJS } = helpers;

import { ProjectShowcase, GlobalLoader, Timeline } from 'components';

import img from 'images/mark.jpg';

const timelineEvents = [{
  title: 'Joined Mercury Digital',
  subtitle: 'Graphic Designer / Web Developer',
  description: 'Worked for Mercury Digital as a Graphic Designer and web developer.',
  from: '2012-05-01'
}, {
  title: 'Joined Skynet Labs',
  subtitle: 'UI Designer / Web Developer',
  description: 'Job Description',
  from: '2013-01-03'
}, {
  title: '🎓 Graduation',
  description: 'Graduated from Maynooth University with a First Class Honours B.Sc in Multimedia.',
  from: '2014-09-08',
  image: 'https://scontent-fra3-1.xx.fbcdn.net/v/t31.0-8/10623395_10152367825657083_4680079939868736085_o.jpg?oh=16b0c7f983ee284ab9fbd2b8f2c6b502&oe=59AC1115'
}, {
  title: 'Joined Boxfish',
  subtitle: 'Front End Developer',
  description: '',
  image: 'https://scontent-fra3-1.cdninstagram.com/t51.2885-15/e15/1530641_884812981584390_1257073628_n.jpg',
  from: '2014-12-01',
  to: '2017-01-01'
}, {
  title: '🇺🇸 Moved to San Francisco',
  subtitle: '',
  description: 'Moved to SF with Boxfish and became the Head of Design.',
  image: 'https://scontent-fra3-1.cdninstagram.com/t51.2885-15/e35/13392892_1639056169748077_969839224_n.jpg',
  from: '2016-05-10'
}, {
  title: '🇮🇪 Moved back to Dublin',
  subtitle: '',
  description: 'I\'ll always have a fondness for SF, but there\'s no place like home.',
  image: 'https://scontent-fra3-1.cdninstagram.com/t51.2885-15/e35/17934517_140392716496566_4388259719450460160_n.jpg',
  from: '2017-01-25'
}, {
  title: 'Joined Zalando',
  subtitle: 'Software Engineer / Visual Designer',
  description: 'Working on surfacing fashion data to help trend scouts and buyers make informed decisions on future trends.',
  image: 'http://image-store.slidesharecdn.com/e893ba36-f323-4307-82c4-84bda98e7383-original.jpeg',
  from: '2017-02-15'
}];

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
  state = {
    visibleProjects: []
  }

  getPublicProjects(projects = []) {
    if (!projects.length) return projects;

    return projects
      .filter(project => project.showcase)
      .sort((a, b) => a.order - b.order);
  }

  render() {

    const { visibleProjects } = this.state;

    const projects =
      this.getPublicProjects(
        Object.keys(this.props.projects).map(x => this.props.projects[x])
      );

    return (
      <div class="homepage">

        <GlobalLoader
          message="Loading Project Showcase..."
          loading={!projects.length} />

        <div class="Index">
          <div class="rekt" />
          <div class="IndexImage"  style={{ backgroundImage: `url(${img})` }}>
            <div class="IndexOverlay" />
          </div>
          <div class="IndexContent">
            <h1>Front End</h1>
            <h1>Developer /</h1>
            <h1>UI Designer</h1>

            <ul>
              <li>Dublin Based Front-End Developer and UI Designer.</li>
              <li>Currently working full-time for <a target="_blank" href="https://zalando.de">Zalando</a>.</li>
              <li>Contact me at <a href="mailto:hello@markmurray.co">hello@markmurray.co</a></li>
            </ul>
          </div>
        </div>

        <Timeline
          width="150vw"
          cardWidth={250}
          events={timelineEvents} />

        {projects.map(project =>
          <Waypoint key={project.id} onEnter={() => this.setState({
            visibleProjects: [...visibleProjects, project.id]
          })}>
            <div class={classNames({
              'animated fadeInUp': visibleProjects.indexOf(project.id) > -1
            })} style={{
              opacity: visibleProjects.indexOf(project.id) < 0 ? '0': 1
            }}>
              <ProjectShowcase project={project} />
            </div>
          </Waypoint>
        )}

        <div
          style={{
            padding: '5em 2em 7em',
            textAlign: 'center',
          }}>

          <p
            style={{
              padding: '2em 0',
              fontSize: '1.15em'
            }}>
            Looking for a Front-End Developer / UI Designer? <br />
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
