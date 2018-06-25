import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom'

// REDUX
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'

import firebaseConfig from './config/firebase'
import theme, { injectThemeVars } from './styles/theme'

import './styles/app.css'
import './styles/icons.css'

// CONTAINERS
import {
  Portfolio,
  NotFound,
  Index,
  Projects,
  ProjectDetail
} from './components'

// Inject theme variables at css :root
injectThemeVars()

const reactReduxFirebaseConfig = {}
const outlet = document.getElementById('app')

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, reactReduxFirebaseConfig)
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
})

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer, {})

const routes = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter history={browserHistory}>
        <Portfolio>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:id" component={ProjectDetail} />
            <Route component={NotFound} />
          </Switch>
        </Portfolio>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

render(routes, outlet)
