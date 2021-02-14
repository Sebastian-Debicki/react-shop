import React, { InputHTMLAttributes } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

import { Search } from 'assets/icons';
import { globalStyles } from 'core';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  placeholderVariant?: 'light' | 'dark';
  withSearchIcon?: boolean;
}

export const Input: React.FC<Props> = ({
  label,
  containerClassName,
  placeholderVariant = 'light',
  withSearchIcon,
  ...rest
}) => {
  const classes = useStyles({ placeholderVariant });

  return (
    <div className={`${classes.container} ${containerClassName}`}>
      {label && <label className={classes.label}>{label}</label>}

      <div className={classes.inputWithIconContainer}>
        <input className={classes.input} {...rest} />
        {withSearchIcon && <Search className={classes.searchIcon} />}
      </div>
    </div>
  );
};

const useStyles = makeStyles<Theme, Pick<Props, 'placeholderVariant'>>(
  (theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    input: {
      width: '100%',
      height: '4.8rem',
      flex: '1',
      padding: '1.6rem',
      fontSize: globalStyles.fontSize.small,
      borderRadius: globalStyles.borderRadius.normal,
      border: `1px solid ${theme.palette.action.active}`,

      '&::placeholder': {
        color: ({ placeholderVariant }) =>
          placeholderVariant === 'dark'
            ? theme.palette.text.primary
            : theme.palette.text.secondary,
      },
    },
    label: {
      display: 'block',
      fontSize: globalStyles.fontSize.small,
      marginBottom: '0.8rem',
    },
    inputWithIconContainer: {
      position: 'relative',
    },
    searchIcon: {
      position: 'absolute',
      right: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  })
);
