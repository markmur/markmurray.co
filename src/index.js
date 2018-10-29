import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { metrics } from 'react-metrics'
import { hot } from 'react-hot-loader'
import config from './config/metrics'

import './styles/app.css'
import './styles/icons.css'
import './images/preview.png'

// Context
import ProjectsProvider from './context/ProjectsProvider'

// Components
import Menu from './components/Menu'

// Routes
import NotFound from './components/NotFound'
import Index from './components/Index'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'

const App = hot(module)(
  metrics(config)(() => (
    <Router>
      <div className="Portfolio site-content">
        <Menu />

        <section className="main-content">
          <ProjectsProvider>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/projects/:id" component={ProjectDetail} />
              <Route path="*" component={NotFound} />
            </Switch>
          </ProjectsProvider>
        </section>
      </div>
    </Router>
  ))
)

ReactDOM.render(<App />, document.getElementById('app'))
