import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi'

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function creatCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course }
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course }
}


export function loadCourses() {
  return dispatch => {
    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses))
    })
    .catch(error => {
      throw(error)
      // In a Prod app we would have dispatch(loadCoursesFailure(error))
    })
  }
}

export function saveCourse(course) {
  return (dispatch, getState) => {
    return courseApi.saveCourse(course)
    .then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(creatCourseSuccess(savedCourse))
    })
    .catch(error => {
      throw(error)
    })
  }
}