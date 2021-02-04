import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
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
