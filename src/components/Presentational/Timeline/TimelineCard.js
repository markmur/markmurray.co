import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

class TimelineCard extends Component {
  render() {
    const {
      title,
      subtitle,
      description,
      from,
      position,
      width,
      style,
      image,
      children
    } = this.props;

    return (
      <div style={Object.assign({}, style, {
        width
      })} class={classNames('TimelineCard', position)}>
        {children}
        {/*<img src={image} />*/}
        <div class="content">
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
          <p>{description}</p>
          <strong>{moment(from, 'YYYY-MM-DD').format('ll')}</strong>
        </div>
      </div>
    )
  }
}

TimelineCard.defaultProps = {
  position: 'top',
  style: {},
  image: 'https://unsplash.it/200/100/?random'
};

TimelineCard.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.number,
  position: PropTypes.oneOf(['top', 'bottom']),
  style: PropTypes.object
};

export default TimelineCard;
