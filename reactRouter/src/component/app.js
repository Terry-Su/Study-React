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
import { Route } from 'react-router'

// react-redux-router
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux'

// history
import createHistory from 'history/createBrowserHistory'


import reducer from '../reducer/index'
import Blog from './Blog/Blog'


// create history
const history = createHistory()

// create router middleware
const theRouterMiddleware = routerMiddleware(history)


const store = createStore(
  combineReducers({
    reducer,
    router: routerReducer
  }),
  applyMiddleware(theRouterMiddleware)
)


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Blog />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)