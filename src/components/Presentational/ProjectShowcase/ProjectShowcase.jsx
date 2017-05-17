import React from 'react';
import PropTypes from 'prop-types';

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
      {project.background_image ?
        <img
          src={project.background_image}
          class="ProjectShowcase--image" />
      : null}
      <div class="content">
        <div class="ProjectShowcase--info">
          <h2>{project.name}</h2>
          <hr />
          <p>{project.caption}</p>
        </div>

        {project.background_image ?
          <img
            class="xs-device-image"
            src={project.background_image}
            style={{
              marginTop: '1em',
              marginBottom: '1em',
              borderRadius: '4px'
            }}
          />
        : null}

        <div class="margin-top-auto">

          {/herokuapp/ig.test(project.external_url) ?
            <small class="note italic">
              (Heroku apps can take up to 30 seconds for the server to wake)
            </small>
          : null}

          {project.external_url ?
            <a class="button" target="_blank" href={project.external_url}>
              View Project <i class="icon-go" />
            </a>
          : null}
        </div>
      </div>
    </div>
  );
}

ProjectShowcase.defaultProps = defaultProps;
ProjectShowcase.propTypes = propTypes;

export default ProjectShowcase;
