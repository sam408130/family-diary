import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import 'antd/dist/antd.css';
import './styles/style.css';

// Initialize store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      { routes }
  </Provider>, document.getElementById('root')
);
