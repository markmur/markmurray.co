import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { metrics } from 'react-metrics'
import config from '../../config/metrics'
import { Content, Main } from '../../styles'

import { Menu } from '..'

@metrics(config)
class Portfolio extends Component {
  render() {
    return (
      <Content>
        <Menu />

        <Main>{this.props.children}</Main>
      </Content>
    )
  }
}

Portfolio.propTypes = {
  children: PropTypes.node.isRequired
}

export default Portfolio
