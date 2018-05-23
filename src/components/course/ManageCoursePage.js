import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
// import {  } from '../../actions/courseActions'

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div></div>
    )
  }
}

ManageCoursePage.propTypes = {
  // PROPS
}

// function mapDispatchToProps() {
//   return bindActionCreators({/*fooo*/, dispatch})
// }

function mapStateToProps(state, ownProps) {
  return { 
    state: state
  }
}

export default connect(mapStateToProps)(ManageCoursePage)

