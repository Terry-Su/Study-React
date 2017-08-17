import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import BreadCrumb from './BreadCrumb'

export default class DetailPage extends React.Component{
  render() {
    return (
    <div>
      <BreadCrumb />
      DetailPage
    </div>
    )
  }
}