import React, { ButtonHTMLAttributes } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

import { globalStyles } from 'core';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  size?: 'small' | 'big';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  variant,
  className,
  disabled = false,
  size = 'big',
  ...rest
}) => {
  const classes = useStyles({ disabled, size });

  const buttonType = {
    filled: `${classes.filled}`,
    outline: classes.outline,
  }[variant];

  return (
    <button
      className={`${classes.base} ${buttonType} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {disabled ? 'Unavailable' : children}
    </button>
  );
};

const useStyles = makeStyles<Theme, Pick<Props, 'disabled' | 'size'>>(
  (theme) => ({
    base: {
      display: 'block',
      border: 'none',
      width: '100%',
      padding: ({ size }) => (size === 'small' ? '1.1rem' : '1.6rem'),
      borderRadius: globalStyles.borderRadius.small,
      fontSize: globalStyles.fontSize.small,
      fontFamily: 'Nunito, sans-serif',
    },

    filled: {
      backgroundColor: ({ disabled }) =>
        disabled ? theme.palette.text.secondary : theme.palette.primary.main,
      color: theme.palette.common.white,

      '&:hover': {
        backgroundColor: ({ disabled }) =>
          disabled ? undefined : theme.palette.primary.dark,
      },
    },

    outline: {
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
  })
);
