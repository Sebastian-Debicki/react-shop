import React, { ButtonHTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/core';

import { globalStyles } from 'core';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  size?: 'small' | 'big';
  className?: string;
}

export const Button: React.FC<Props> = ({
  children,
  variant,
  className,
  size = 'big',
  ...rest
}) => {
  const classes = useStyles();

  const buttonType = {
    filled: classes.filled,
    outline: classes.outline,
  }[variant];

  return (
    <button
      className={`${classes.base} ${buttonType} ${className} 
      ${size === 'small' && classes.small}`}
      {...rest}
    >
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },

  outline: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },

  small: {
    padding: '1.1rem 0',
  },
}));
