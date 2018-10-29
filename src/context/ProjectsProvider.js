import React, { createContext } from 'react'
import PropTypes from 'prop-types'

// Use react.lazy
import projects from '../projects'

const { Provider, Consumer } = createContext()

class ProjectsProvider extends React.Component {
  state = {
    projects
  }

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer }
export default ProjectsProvider
