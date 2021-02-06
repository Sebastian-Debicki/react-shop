import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { store } from 'store';
import { theme } from 'core';

export const AppProviders: React.FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>{children}</Router>
    </ThemeProvider>
  </Provider>
);
