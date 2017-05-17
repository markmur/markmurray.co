import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimelineCard from './TimelineCard';
import enableDragToScroll from 'services/dragToScroll';

const CARD_WIDTH = 300;

const normalise = (val, max, min) => (val - min) / (max - min);

class Timeline extends Component {
  constructor(props) {
    super(props)

    this.state = {
      minDistance: '6em'
    };

    this.normalisedDates = [];
  }

  componentWillReceiveProps({ events }) {
    this.years = [];

    const dates = events.map(x => {
      let date = new Date(x.from);

      if (this.years.indexOf(date.getFullYear()) < 0) {
        this.years.push(date.getFullYear());
      }

      return Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDay()
      );
    });

    dates.push(new Date().getTime());

    const min = Math.min(...dates);
    const max = Math.max(...dates);

    this.normalisedDates = dates.map(x =>
      Math.round(normalise(x, max, min) * 100)
    );

    this.years = this.years.sort();
  }

  componentDidMount() {
    this.cards.scrollLeft = 3000;
  }

  componentDidUpdate() {
    enableDragToScroll('.cards');
  }

  render() {
    const { lineWidth, events, width, cardWidth } = this.props;
    const { minDistance } = this.state;

    const enrichedEvents = events.map((x, i) => ({
      style: {
        left: `calc(${this.normalisedDates[i]}% - ${cardWidth/2}px)`,
      },
      position: i % 2 === 0 ? 'bottom' : 'top',
      ...x
    }));

    // const cardsWidth = `calc(${width} + ${cardWidth}px)`;
    const CardTemplate = this.props.cardTemplate;

    return (
      <div ref={(c) => { this.timeline = c; }} class="Timeline">
        <div style={{
          borderTop: `${lineWidth}px solid`
        }} class="line" />
        <div class="card-wrapper">
          <div
            ref={(c) => { this.cards = c; }}
            class="cards">
            {enrichedEvents.map((event, i) =>
              <CardTemplate
                {...event}
                width={cardWidth}
                position={event.position}
                style={event.style}
                key={`timeline-event-${i}`}>
                <div class="event-line" />
                <div class="event-dot" />
              </CardTemplate>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Timeline.propTypes = {
  width: PropTypes.string,
  cardWidth: PropTypes.number,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    from: PropTypes.string.isRequired,
    to: PropTypes.string
  })),
  lineWidth: PropTypes.number,
  cardTemplate: PropTypes.func.isRequired
}

Timeline.defaultProps = {
  width: '100%',
  cardWidth: CARD_WIDTH,
  direction: 'horizontal',
  events: [],
  lineWidth: 2,
  cardTemplate: (props) => <TimelineCard {...props} />
};

export default Timeline;
