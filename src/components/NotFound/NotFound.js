import React, { Component } from 'react';
import { Link } from 'react-router';

import Menu from 'Menu/Menu';

export default class NotFound extends Component {
  render() {
    return (
      <section class="NotFound">
        <h1 ref="title">Oops. Looks like that page doesn't exist yet.</h1>
        <Link class="button" to="/">Go back!</Link>
      </section>
    );
  }
}
