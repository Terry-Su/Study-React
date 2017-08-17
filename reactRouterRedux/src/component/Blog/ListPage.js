import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import Catalog from './Catalog'
import DetailList from './DetailList'
import BreadCrumb from './BreadCrumb'

export default class ListPage extends React.Component{
  render() {
    return (
    <div>
      <BreadCrumb />
      <Catalog />
      <DetailList />
    </div>
    )
  }
}