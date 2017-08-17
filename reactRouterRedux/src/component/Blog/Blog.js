import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import HomePage from './HomePage'
import DetailPage from './DetailPage'
import ListPage from './ListPage'

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <Router history={this.props.history}>
          <div>
            <Route exact path="/" component={HomePage} ></Route>
            <Route path="/detail" component={DetailPage} />
            <Route path="/list" component={ListPage} />
          </div>
        </Router>
      </div>
    )
  }
}