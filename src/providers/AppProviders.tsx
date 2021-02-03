import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'core';

export const AppProviders: React.FC = ({ children }) => (
  <Router>
    <GlobalStyle />
    {children}
  </Router>
);
