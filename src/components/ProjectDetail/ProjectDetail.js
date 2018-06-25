import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
import Markdown from 'react-markdown'
import styled from 'styled-components'

const Project = styled.div`
  header {
    position: relative;
    height: ${p => p.theme.projectDetail.height};
    background-size: cover;
    background-position: center center;
    display: flex;
    color: white;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding: 2em 1em;
    margin-bottom: 2em;

    h1 {
      color: white;
      z-index: 2;
      font-size: 3rem;
    }

    &::before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(${p => p.theme.colors.navy}, 0.6);
    }
  }
`

const mapStateToProps = ({ firebase }, props) => ({
  project: helpers.dataToJS(firebase, `/projects/${props.params.id}`)
})

@firebase(props => [`projects/${props.params.id}`])
@connect(mapStateToProps)
class ProjectDetail extends Component {
  render() {
    const { project } = this.props

    if (!project) return null

    return (
      <Project>
        <Markdown source={project.body} />
      </Project>
    )
  }
}

ProjectDetail.defaultProps = {
  project: {}
}

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    body: PropTypes.string
  })
}

export default ProjectDetail
