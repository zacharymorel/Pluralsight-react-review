import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from  'redux'
import { createCourse } from '../../actions/courseActions'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)
  }


  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return { 
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCourse }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)