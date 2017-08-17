// react
import React from 'react'
import { render } from 'react-dom'

// redux
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

// react-redux
import {
  Provider
} from 'react-redux'

// react-router
import { 
  Router, 
  Route, 
  browserHistory
 } from 'react-router'
//  import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// react-redux-router
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'

import reducers from '../reducer/index'
import Blog from './Blog/Blog'



const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(logger)
)

// global
window.store = store
window.getState = store.getState

// create history
const history = syncHistoryWithStore(browserHistory, store)


render(
  <Provider store={store}>
    <Blog history={history} />
  </Provider>,
  document.getElementById('app')
)


function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}