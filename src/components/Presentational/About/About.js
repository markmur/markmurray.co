import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

const About = ({ open }) => (
  <div class={classNames('About', { open })}>
    {`Mark Murray is a twenty-something year old Front End Developer and UI
    Designer from Dublin, Ireland.`}
  </div>
);

About.propTypes = {
  open: PropTypes.bool.isRequired
};

export default About;
