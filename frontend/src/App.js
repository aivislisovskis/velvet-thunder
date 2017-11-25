import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'rxjs';
import {
  applyMiddleware,
  createStore,
  combineReducers
} from 'redux';

import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import Widget from './components/widget/Widget.container';

// reducers
import WidgetReduce from './components/widget/Widget.reducers';

import epicWidget from './components/widget/Widget.actions.epics';

// logger (should comment in PROD)
const logger = createLogger();

const epicMiddleware = createEpicMiddleware(epicWidget);

const history = createHistory();
const middleware = routerMiddleware(history);

console.info(middleware);

const store = createStore(
  combineReducers({
    WidgetReduce,
    routing: routerReducer
  }),
  applyMiddleware(epicMiddleware, middleware)
);



class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <MuiThemeProvider>
      <ConnectedRouter  history={history}>
        <Route path="/id/:productId" component={Widget}>
        </Route>
      </ConnectedRouter >
      </MuiThemeProvider>
    </Provider>
  );
  }
}


export default App;
