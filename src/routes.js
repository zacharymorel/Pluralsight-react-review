import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AboutPage from './components/about/AboutPage'
import App from './components/app'
import CoursesPage from './components/course/CoursesPage';
import HomePage from './components/home/HomePage'
import ManageCoursePage from './components/course/ManageCoursePage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
    <Route path='about' component={AboutPage}/>
    <Route path='courses' component={CoursesPage}/>
    <Route path='course' component={ManageCoursePage}/>
    <Route path='course/:id' component={ManageCoursePage}/>
  </Route>
)