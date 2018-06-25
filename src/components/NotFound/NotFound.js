import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  justify-content: center;
  height: 100vh;

  h1 {
    margin-bottom: 1em;
  }
`

export default () => (
  <NotFound>
    <h1>Oops. Looks like that page does not exist yet.</h1>
    <Link className="button" to="/">
      Go back!
    </Link>
  </NotFound>
)
