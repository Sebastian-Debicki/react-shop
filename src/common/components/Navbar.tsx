import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { debounce } from 'debounce';

import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import { Logo } from 'assets/icons';
import { AppRoute } from 'routing';
import { changeQuery, productsSelector } from 'store';

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { query } = useSelector(productsSelector);
  const history = useHistory();
  const classes = useStyles();

  const debouncedInputChange = debounce((search: string) => {
    dispatch(changeQuery({ ...query, search, page: 1 }));
  }, 800);

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <Logo />

        <Button
          variant='outline'
          size='small'
          className={classes.loginButton}
          onClick={() => history.push(AppRoute.login)}
        >
          Log in
        </Button>

        <Input
          placeholder='Search'
          onChange={(e) => debouncedInputChange(e.target.value)}
          containerClassName={classes.inputContainer}
          placeholderVariant='dark'
          withSearchIcon
        />

        <div className={classes.checkboxContainer}>
          <Checkbox
            checked={query.active}
            label='Active'
            onChange={(e) =>
              dispatch(
                changeQuery({ ...query, active: e.target.checked, page: 1 })
              )
            }
          />
          <Checkbox
            checked={query.promo}
            label='Promo'
            onChange={(e) =>
              dispatch(
                changeQuery({ ...query, promo: e.target.checked, page: 1 })
              )
            }
          />
        </div>
      </nav>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 100,
    backgroundColor: theme.palette.common.white,
  },

  nav: {
    padding: '4.8rem 2.4rem 3.2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '4.8rem 1fr 2.4rem',
    alignItems: 'center',
    maxWidth: '122.4rem',
    margin: '0 auto',

    [theme.breakpoints.up('md')]: {
      padding: '0 2.4rem',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: '14.4rem',
    },

    [theme.breakpoints.up('lg')]: {
      padding: '0',
    },
  },
  checkboxContainer: {
    gridColumn: '1/4',

    [theme.breakpoints.up('md')]: {
      gridColumn: '4/5',
      gridRow: '1',
    },
  },
  inputContainer: {
    margin: '2.4rem 0',
    gridRow: '2/3',
    gridColumn: '1/3',

    [theme.breakpoints.up('md')]: {
      gridColumn: '2/4',
      gridRow: '1/2',
      marginRight: '2.4rem',
    },
  },
  loginButton: {
    width: '8.8rem',
    justifySelf: 'flex-end',
  },
}));
