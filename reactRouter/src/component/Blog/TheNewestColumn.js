import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { browserHistory } from 'react-router'

export default class TheNewestColumn extends React.Component{
  render() {
    return (
    <div style={{
      border: '1px solid #aaa'
    }}>
      <h3 onClick={
        () => browserHistory.push('/detail')
      }>The Newest</h3>
      <p>
        <Link to='/detail'>detail 1</Link>
      </p>
      <p>
        <Link to='/detail'>detail 2</Link>
      </p>
      <p>
        <Link to='/detail'>detail 3</Link>
      </p>
    </div>
    )
  }
}