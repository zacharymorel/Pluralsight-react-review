import AuthorApi from '../api/mockAuthorApi'
import * as types from './actionTypes'

export function loadAuthorSucces(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorSucces(authors))
    })
    .catch(error => {
      throw(error)
    })
  }
}