import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Spinner as IconSpinner } from 'assets/icons';

export const Spinner: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinnerContainer}>
      <IconSpinner className={classes.spinner} />
    </div>
  );
};

const useStyles = makeStyles({
  '@keyframes spinner': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  spinner: {
    animation: '$spinner infinite linear 1.5s',
  },
  spinnerContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
