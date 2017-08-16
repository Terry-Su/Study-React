import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



export default class DetailList extends React.Component{
  render() {
    return (
    <div style={{
      border: '1px solid #aaa'
    }}>
      <h3>Detail List</h3>
      <p>
        <Link to='/detail'>detail1</Link>
      </p>
      <p>
        <Link to='/detail'>detail2</Link>
      </p>
      <p>
        <Link to='/detail'>detail3</Link>
      </p>
    </div>
    )
  }
}