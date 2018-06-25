import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLogo = styled.div`
  color: var(--primary);
  font-weight: normal;
  text-align: center;
`

const Logo = props => (
  <StyledLogo style={{ fontSize: props.size }}>Mark Murray</StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string
}

Logo.defaultProps = {
  size: '2rem'
}

export default Logo
