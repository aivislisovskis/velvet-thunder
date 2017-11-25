import ReactDOM from 'react-dom';
import './index.css';
import React, { component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
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
import thunk from 'redux-thunk';

import Widget from './components/widget/Widget.container';

// reducers
import WidgetReducer from './components/widget/Widget.reducers';

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

// logger (should comment in PROD)
const logger = createLogger();

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    WidgetReducer,
    routing: routerReducer
  }),
  applyMiddleware(middleware, thunk)
);

ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter  history={history}>
        <div>
        <Route path="/id/:productId" component={Widget} />
        </div>
      </ConnectedRouter>
    </Provider>
    ,
      document.getElementById('root')
);
