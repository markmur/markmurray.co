import React, { PropTypes } from 'react';

const propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    caption: PropTypes.string,
    external_url: PropTypes.string
  }).isRequired
};
const defaultProps = {};

function ProjectShowcase(props) {

  const { project } = props;

  return (
    <div class="ProjectShowcase">
      <div class="ProjectShowcase--overlay" />
      <div class="content">
        <div class="ProjectShowcase--info">
          <h1>{project.name}</h1>
          <p>{project.caption}</p>
          <hr />
        </div>

        <div class="margin-top-auto">
          <a href={project.external_url}>View Project <i class="icon-go" /></a>

          <p>Project Type: <strong class="capitalize">{project.type}</strong></p>
        </div>
      </div>
    </div>
  );
}

ProjectShowcase.defaultProps = defaultProps;
ProjectShowcase.propTypes = propTypes;

export default ProjectShowcase;
