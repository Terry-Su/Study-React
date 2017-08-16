import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TheNewestColumn from './TheNewestColumn'
import Catalog from './Catalog'


export default class HomePage extends React.Component{
  render() {
    return (
    <div>
      <TheNewestColumn />
      <Catalog />
    </div>
    )
  }
}