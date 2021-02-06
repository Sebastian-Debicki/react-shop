import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from 'core';
import { store } from 'store';

export const AppProviders: React.FC = ({ children }) => (
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      {children}
    </Router>
  </Provider>
);
