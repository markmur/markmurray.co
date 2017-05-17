import 'styles/app.scss';
import 'styles/icons.css';
import 'images/preview.png';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// REDUX
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxFirebase, firebaseStateReducer } from 'redux-firebasev3';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer
});

const config = {
  apiKey: "AIzaSyCmY2dJvUSuBqtVQhSyJ-N25ZFNrgp_gIk",
  authDomain: "markmurray.firebaseapp.com",
  databaseURL: "https://markmurray.firebaseio.com",
  storageBucket: "project-4767000521921178323.appspot.com",
  messagingSenderId: "886529923760"
};

const createStoreWithFirebase = compose(
  reduxFirebase(config, { userProfile: 'users' }),
)(createStore);

const store = createStoreWithFirebase(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

import {
  App,
  NotFound,
  Index,
  Projects,
  ProjectDetail
} from 'components';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>

      <Route path="/" component={App}>
        <IndexRoute component={Index} />

        <Route path="projects" component={Projects} />
        <Route path="projects/:id" component={ProjectDetail} />

        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

render(routes, document.getElementById('app'));
