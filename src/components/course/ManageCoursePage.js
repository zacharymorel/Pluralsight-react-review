import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
// import {  } from '../../actions/courseActions'
import CourseForm from './CourseFrom'

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }
  }

  render() {
    return (
      <CourseForm 
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors}
      />
    )
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
}

// function mapDispatchToProps() {
//   return bindActionCreators({/*fooo*/, dispatch})
// }

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
  return { 
    // state: state
    course
  }
}

export default connect(mapStateToProps)(ManageCoursePage)

