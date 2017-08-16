import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Catalog from './Catalog'
import DetailList from './DetailList'



export default class ListPage extends React.Component{
  render() {
    return (
    <div>
      <Catalog />
      <DetailList />
    </div>
    )
  }
}