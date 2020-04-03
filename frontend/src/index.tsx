import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './assets/styles/gloabalstyles';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
