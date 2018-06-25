import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

export const load = resource =>
  compose(
    firebaseConnect([resource]),
    connect(state => ({
      [resource]: state.firebase.data[resource]
    }))
  )
