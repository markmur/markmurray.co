import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <section class="NotFound">
    <h1 ref="title">Oops. Looks like that page doesn't exist yet.</h1>
    <Link class="button" to="/">Go back!</Link>
  </section>
);

export default NotFound;
