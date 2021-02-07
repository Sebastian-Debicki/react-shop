import { createMuiTheme } from '@material-ui/core';

export const globalStyles = {
  // palette: {
  //   primary: {
  //     main: '#4460F7',
  //     dark: '#2140E8',
  //   },
  //   secondary: {
  //     main: '#F9A52B',
  //   },
  //   basic: {
  //     white: '#FFFFFF',
  //     border: '#E0E2EA',
  //     disabled: '#9194A5',
  //   },
  //   text: {
  //     main: '#1A1B1D',
  //     light: '#9194A5',
  //   },
  //   background: {
  //     light: '#F2F2F2',
  //   },
  // },
  borderRadius: {
    small: '4px',
    normal: '8px',
  },
  fontSize: {
    small: '1.4rem',
    normal: '1.6rem',
    big: '1.8rem',
    header2: '3rem',
  },
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4460F7',
      dark: '#2140E8',
    },
    secondary: {
      main: '#F9A52B',
    },
    text: {
      primary: '#1A1B1D',
      secondary: '#9194A5',
    },
    background: {
      default: '#F2F2F2',
    },
    action: {
      active: '#E0E2EA',
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%',
          fontFamily: 'Nunito, sans-serif',
        },
        button: {
          fontFamily: 'Nunito, sans-serif',
        },
        input: {
          fontFamily: 'Nunito, sans-serif',
        },
      },
    },
  },
});
