import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import './styles/styles.css' // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// initialState can be a nice place for rehydrating the application with server side data
// const store = configureStore(initialState)
const store = configureStore() 

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)