import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import avatar from 'assets/images/avatar.png';
import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import { Logo } from 'assets/icons';
import { AppRoute } from 'routing';

interface Props {
  onInputChange: (value: string) => void;
  onCheckActive: (value: boolean) => void;
  onCheckPromo: (value: boolean) => void;
}

export const Navbar: React.FC<Props> = ({
  onInputChange,
  onCheckActive,
  onCheckPromo,
}) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <nav className={classes.container}>
      <Logo />
      {/* <img src={avatar} className={classes.avatar} alt='user avatar' /> */}
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
        onChange={(e) => onInputChange(e.target.value)}
        containerClassName={classes.inputContainer}
      />

      <div className={classes.checkboxContainer}>
        <Checkbox
          checked={true}
          label='Active'
          onChange={(e) => onCheckActive(e.target.checked)}
        />
        <Checkbox
          checked={true}
          label='Promo'
          onChange={(e) => onCheckPromo(e.target.checked)}
        />
      </div>
    </nav>
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
    padding: '4.8rem 2.4rem 3.2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '4.8rem 1fr 2.4rem',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      padding: '0 2.4rem',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: '14.4rem',
    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 10.8rem',
    },
  },
  checkboxContainer: {
    gridColumn: '1/4',

    [theme.breakpoints.up('md')]: {
      gridColumn: '4/5',
      gridRow: '1',
    },
  },
  avatar: {
    gridColumn: '2/3',
    gridRow: '1/2',
    justifySelf: 'flex-end',
    borderRadius: '50%',

    [theme.breakpoints.up('md')]: {
      gridColumn: '5/6',
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
