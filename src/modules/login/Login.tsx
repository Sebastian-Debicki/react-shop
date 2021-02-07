import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import loginImage from 'assets/images/loginImage.png';
import { Logo } from 'assets/icons';
import { AppRoute } from 'routing';
import { Input, Button } from 'common';
import { globalStyles } from 'core';

export const Login = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <img src={loginImage} className={classes.image} alt='man on the bridge' />

      <div className={classes.formContainer}>
        <Logo
          onClick={() => history.push(AppRoute.home)}
          className={classes.logo}
        />
        <form className={classes.form}>
          <h2 className={classes.header}>Login</h2>
          <Input
            label='Login'
            placeholder='Enter username'
            containerClassName={classes.input}
          />
          <Input label='Password' placeholder='Enter password' />
          <Button className={classes.button} variant='filled'>
            Log in
          </Button>
          <button className={classes.forgotButton}>Forgot password?</button>
        </form>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.common.white,
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'auto 1fr',
    },
  },
  image: {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      height: '100vh',
      display: 'block',
    },
  },
  logo: {
    marginTop: '4rem',
    marginLeft: '2.4rem',

    [theme.breakpoints.up('md')]: {
      marginTop: '5.2rem',
    },
  },
  header: {
    fontSize: globalStyles.fontSize.header2,
  },
  formContainer: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '15vh 85vh',
    justifyContent: 'center',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '49.6rem',
      gridTemplateRows: '25vh 75vh',
    },

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-start',
      marginLeft: '15rem',
    },
  },
  form: {
    margin: '2.4rem',
  },
  button: {
    marginTop: '5.6rem',
  },
  input: {
    marginBottom: '2.2rem',
  },
  forgotButton: {
    color: theme.palette.text.secondary,
    marginTop: '1.6rem',
    textDecoration: 'underline',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: globalStyles.fontSize.small,
  },
}));
