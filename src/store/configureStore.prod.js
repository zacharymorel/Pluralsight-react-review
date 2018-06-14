import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// initialState can be a nice place for rehydrating the application with server side data
export default function configureStore(initialState) {
  return createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunk)
  )
}