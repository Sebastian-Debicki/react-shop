import React from 'react';
import { makeStyles } from '@material-ui/core';

import { globalStyles } from 'core';

interface Props {
  variant: 'filled' | 'outline';
  className: string;
}

export const Button: React.FC<Props> = ({
  children,
  variant,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const type = {
    filled: classes.filled,
    outline: classes.outline,
  }[variant];

  return (
    <button className={`${classes.base} ${type} ${className}`}>
      {children}
    </button>
  );
};

const useStyles = makeStyles((theme) => ({
  base: {
    display: 'block',
    border: 'none',
    width: '100%',
    padding: '1.6rem',
    borderRadius: globalStyles.borderRadius.small,
    fontSize: globalStyles.fontSize.small,
    fontFamily: 'Nunito, sans-serif',
  },

  filled: {
    backgroundColor: globalStyles.palette.primary.main,
    color: globalStyles.palette.basic.white,
  },

  outline: {
    backgroundColor: globalStyles.palette.basic.white,
    border: `1px solid ${globalStyles.palette.primary.main}`,
    color: globalStyles.palette.primary.main,
  },
}));
