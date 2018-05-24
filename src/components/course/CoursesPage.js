import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from  'redux'
import { browserHistory } from 'react-router'
import CourseList from './CourseList'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course')
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    const { courses } = this.props
    return (
      <div>
        <h1>Courses</h1>
        <input 
          className='btn btn-primary'
          onClick={this.redirectToAddCoursePage}
          type='submit'
          value='Add Course'
        />
        <CourseList courses={courses} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  // debugger
  return { 
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage)