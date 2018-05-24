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

  updateCourse(e) {
    const field = e.target.name 
    let course = Object.assign({}, this.state.course)
    course[field] = e.target.value
    return this.setState({ course: course })
  }
  
  saveCourse(e) {
    e.preventDefault()
    this.props.saveCourse(this.state.course)
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({saveCourse, dispatch})
}

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}

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

export default connect(mapStateToProps)(ManageCoursePage)

