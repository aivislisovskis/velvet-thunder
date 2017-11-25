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
import Details from './components/details/Details.container';
import Add from './components/add/Add.container';

// reducers
import WidgetReducer from './components/widget/Widget.reducers';
import DetailsReducer from './components/details/Details.reducers';
import AddReducer from './components/add/Add.reducers';

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

// logger (should comment in PROD)
const logger = createLogger();

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    WidgetReducer,
    DetailsReducer,
    AddReducer,
    routing: routerReducer
  }),
  applyMiddleware(logger, middleware, thunk)
);

ReactDOM.render(
   <Provider store={store}>
     <MuiThemeProvider>
      <ConnectedRouter  history={history}>
        <div>
        <Route path="/id/:productId" component={Widget} />
        <Route path="/add" component={Add} />
        <Route path="/details/:productId" component={Details} />
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
    </Provider>
    ,
      document.getElementById('root')
);
