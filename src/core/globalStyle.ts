import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

/**
 * @description
 * s: 576px;
 * m: 768px;
 * l: 1024px;
 * xl: 1200px;
 */
export const breakpoints = {
  s: '576px',
  m: '768px',
  l: '1024px',
  xl: '1366px',
};

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: 'border-box';
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        background: ${theme.palette.background.light};;
    }

    button, input {
        font-family: 'Nunito', sans-serif;
    }
`;
