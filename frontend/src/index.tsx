import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './assets/styles/gloabalstyles';

import { History } from './services/history';
import Routes from './routes';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={History}>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} position="top-left" />
    </Router>
  </Provider>,
  document.getElementById('root')
);
