import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import { globalStyles } from 'core';
import { Empty } from 'assets/icons';

export const NothingFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Empty />
      <Typography className={classes.header} variant='h5'>
        Ooops… It’s empty here
      </Typography>

      <Typography className={classes.description}>
        There are no products on the list
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    height: '33.4rem',
    borderRadius: globalStyles.borderRadius.normal,
    backgroundColor: theme.palette.common.white,
    marginTop: '2.4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2.4rem auto 0',

    [theme.breakpoints.up('sm')]: {
      width: '60rem',
      margin: '5.6rem auto 0',
    },
  },
  header: {
    fontSize: globalStyles.fontSize.big,
    margin: '2.2rem 0 0.8rem 0',
  },
  description: {
    fontSize: globalStyles.fontSize.small,
  },
}));
