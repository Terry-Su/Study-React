import React from 'react'
import {
  connect
} from 'react-redux'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'


class BreadCrumb extends React.Component{
  render() {
    const { path } = this.props
    return (
    <div>
      {
        path === '/' ? 
        '' 
        :
        <div>
          <Link to='/'>Home </Link>
          <Link to={path}>{path}</Link>
        </div> 
      }
    </div>
    )
  }
}

export default connect(
  state => ({
    path: state.routing.locationBeforeTransitions.pathname
  })
)(BreadCrumb)