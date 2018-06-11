import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { saveCourse } from '../../actions/courseActions'
import CourseForm from './CourseFrom'

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }

    this.updateCourse = this.updateCourse.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id !== nextProps.course.id) 
      this.setState({ course: Object.assign({}, nextProps.course) })
  }

  updateCourse(e) {
    const field = e.target.name 
    let course = Object.assign({}, this.state.course)
    course[field] = e.target.value
    return this.setState({ course: course })
  }
  
  saveCourse(e) {
    e.preventDefault()
    this.props.saveCourse(this.state.course)
    this.context.router.push('/courses')
  }

  render() {
    return (
      <CourseForm 
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
        onChange={this.updateCourse}
        onSave={this.saveCourse}
      />
    )
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  saveCourse: PropTypes.func.isRequired
}

ManageCoursePage.contextTypes = {
  router: PropTypes.object
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id)
  if(course) 
    return course[0]
  
  return null
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id  // from the path `/course/id`
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId)
  }

  const authorsFormattedForDropDown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName 
    } 
  })

  return { 
    authors: authorsFormattedForDropDown,
    course
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveCourse }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)

