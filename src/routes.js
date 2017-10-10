import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import Login from './pages/login';
import { HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={App} />
    </div>
  </HashRouter>
)

export default routes;
