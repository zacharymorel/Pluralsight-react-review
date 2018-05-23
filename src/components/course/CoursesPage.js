import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from  'redux'
import { createCourse } from '../../actions/courseActions'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: { title: '' }
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onTitleChange(e) {
    const course = this.state.course 
    course.title = e.target.value
    this.setState({ course: course })
  }

  onClickSave() {
    this.props.createCourse(this.state.course)
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        {this.props.courses.map(this.courseRow)}
        <input
          type='text'
          onChange={this.onTitleChange}
          value={this.state.course.title} 
        />
        <input 
          type='submit'
          value='Save'
          onClick={this.onClickSave}
        />
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