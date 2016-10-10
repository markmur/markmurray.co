import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { firebase } from 'redux-firebasev3';
import classNames from 'classnames';

// Components
import Project from 'Project/Project';
import Menu from 'Menu/Menu';

const propTypes = {};
const defaultProps = {};

@firebase(['projects'])
@connect()
class ProjectEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadProgress: 0,
      image: null,
      created: false
    };
  }

  create(e) {
    e.preventDefault();

    const { name, caption, description } = this.refs;
    const { image } = this.state;

    this.props.firebase.push('/projects', {
      name: name.value,
      caption: caption.value,
      description: description.value,
      image: image
    }).then(created => {
      this.setState({
        created: true
      }, () => {
        setTimeout(() => {
          this.setState({
            created: false
          });
          browserHistory.push('/projects');
        }, 4000);
      });
    });
  }

  uploadImage(image) {
    const { firebase } = this.props;

    const storage = firebase.storage().ref('projects');
    var uploadTask = storage.child(image.name).put(image);

    uploadTask.on('state_changed', (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      this.setState({
        uploadProgress: progress
      });

    }, (error) => {
      console.error(error);

    }, () => {

      const { downloadURL } = uploadTask.snapshot;

      this.setState({
        image: downloadURL
      });
    });
  }

  render() {

    const {
      uploadProgress,
      name,
      description,
      caption,
      image,
      created
    } = this.state;

    return (
      <div class="ProjectEditor">
        <aside class="ProjectEditor-side">
          <div class="">

            <h2 class="text-center">Create New Project</h2>

            <form ref="form">
              <label>Project Name</label>
              <input
                ref="name"
                type="text"
                placeholder="Name..."
                onChange={({ target }) => this.setState({ name: target.value })} />

              <label>Project Caption</label>
              <input
                ref="caption"
                type="text"
                placeholder="Caption..."
                onChange={({ target }) => this.setState({ caption: target.value })} />

              <label>Project Description</label>
              <textarea
                ref="description"
                placeholder="Description..."
                onChange={({ target }) => this.setState({ description: target.value })} />

              <label>Upload Image</label>
              <input
                ref="image"
                type="file"
                accept="image/*"
                class={classNames({
                  hidden: image !== null && typeof image !== 'undefined'
                })}
                onChange={event => this.uploadImage(event.target.files[0])} />

              <progress
                value={uploadProgress}
                max={100}
                class={classNames({
                  hidden: uploadProgress === 0 || uploadProgress === 100
                })} />

              <input
                type="submit"
                class={classNames({ success: created })}
                value={created ? 'Created!' : 'Create Project'}
                onClick={this.create.bind(this)}/>
            </form>
          </div>

        </aside>

        <main class="ProjectEditor-main">
          <div class="container">
            <div class="projects">
              <Project project={{
                name: name || 'Project Name',
                description: description || 'Project Description',
                caption: caption || 'This is the project caption',
                image
              }} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

ProjectEditor.defaultProps = defaultProps;
ProjectEditor.propTypes = propTypes;

export default ProjectEditor;
