import React, { Component, PropTypes } from 'react';
import { get } from 'jquery';
import { Link } from 'react-router';

const propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string,
  }),
  canDelete: PropTypes.bool
};

const defaultProps = {
  canDelete: false
};

const fetchGithubProject = (url) => {

  const repoName = url.slice(url.lastIndexOf('/') + 1, url.length);

  get(`https://api.github.com/repos/markmur/${repoName}`)
    .then(repo => {
      console.log(repo);
    });

};

const wrapProject = (project, content) => {

  if (!project.github_url && !project.external_url) {
    return (
      <Link
        data-metrics-event-name="projectClick"
        data-metrics-project-name={project.name}
        data-metrics-project-url={`/projects/${project.id}`}
        to={`/projects/${project.id}`}>
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
        href={project.github_url}>
        {content}
      </a>
    );
  }

  if (project.external_url) {
    return (
      <a
        data-metrics-event-name="projectClick"
        data-metrics-project-name={project.name}
        data-metrics-project-url={project.external_url}
        target="_blank"
        href={project.external_url}>
        {content}
      </a>
    );
  }
};

function Project(props) {
  const { project } = props;

  if (!project.public) return null;

  const projectContent = (
    <div class="project-content">

      {project.type === 'github' ?
        <small class="tag">Github</small>
      : null}

      {project.type === 'app' ?
        <small class="app tag">App</small>
      : null}

      {project.type === 'design' ?
        <small class="design tag">Design</small>
      : null}

      <h2 class="project-title">
        {project.name}
      </h2>
      <small>{project.caption}</small>
    </div>
  );

  return (
    <div
      class="project"
      onClick={() => {
        if (typeof props.onClick === 'function') {
          props.onClick(project);
        }
      }}>
      {props.onClick ? projectContent : wrapProject(project, projectContent)}
    </div>
  );
}

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default Project;
