import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Catalog extends React.Component{
  render() {
    return (
    <div style={{
      border: '1px solid #aaa'
    }}>
      <h3>Catalog</h3>
      <p>
        <Link to='/list'>catagory1</Link>
      </p>
      <p>
        <Link to='/list'>catagory2</Link>
      </p>
      <p>
        <Link to='/list'>catagory3</Link>
      </p>
    </div>
    )
  }
}