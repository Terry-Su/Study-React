import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import TheNewestColumn from './TheNewestColumn'
import Catalog from './Catalog'
import BreadCrumb from './BreadCrumb'


export default class HomePage extends React.Component{
  render() {
    return (
    <div>
      <BreadCrumb />
      <TheNewestColumn />
      <Catalog />
    </div>
    )
  }
}