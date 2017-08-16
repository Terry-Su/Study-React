import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './HomePage'
import DetailPage from './DetailPage'
import ListPage from './ListPage'

export default class Test extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>     
          <Route path="/detail" component={DetailPage}/>
          <Route path="/list" component={ListPage}/>
        </div>
      </Router>
    )
  }
}