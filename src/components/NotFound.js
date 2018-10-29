import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <section className="NotFound">
        <h1>Oops. Looks like that page doesn't exist yet.</h1>
        <Link className="button" to="/">
          Go back!
        </Link>
      </section>
    )
  }
}
