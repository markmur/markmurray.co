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

// CONTAINERS
import Portfolio from 'Portfolio/Portfolio';
import NotFound from 'NotFound/NotFound';

import Index from 'Index/Index';

// PROJECTS
import Projects from 'Projects/Projects';
import ProjectDetail from 'ProjectDetail/ProjectDetail';
import Slider from 'Slider/Slider';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path="/" component={Portfolio}>
        <IndexRoute component={Index} />

        <Route path="projects" component={Projects} />
        <Route path="projects/:id" component={ProjectDetail} />

        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

render(routes, document.getElementById('app'));
