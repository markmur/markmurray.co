import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Logo extends PureComponent {
  static propTypes = {
    size: PropTypes.string
  }

  static defaultProps = {
    size: '2rem'
  }

  render() {
    return (
      <div id="Logo" style={{ fontSize: this.props.size }}>
        Mark Murray
      </div>
    )
  }
}

export default Logo
