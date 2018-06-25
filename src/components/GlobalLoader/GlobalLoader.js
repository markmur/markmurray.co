import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Loader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 2em;
  z-index: 100;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${p => p.theme.fonts.header};
`

const GlobalLoader = props => {
  if (!props.loading) return null

  return <Loader>{props.message}</Loader>
}

GlobalLoader.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string
}

GlobalLoader.defaultProps = {
  message: 'Loading...',
  loading: true
}

export default GlobalLoader
