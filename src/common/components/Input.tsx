import React, { InputHTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/core';

import { globalStyles } from 'core';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholderColor?: 'light' | 'dark';
  containerStyles?: string;
}

export const Input: React.FC<Props> = ({
  label,
  placeholderColor = 'light',
  containerStyles,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${containerStyles}`}>
      {label && <label className={classes.label}>{label}</label>}
      <input className={`${classes.input}`} {...rest} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    height: '4.8rem',
    flex: '1',
    padding: '1.6rem',
    fontSize: globalStyles.fontSize.small,
    borderRadius: globalStyles.borderRadius.normal,
    border: `1px solid ${globalStyles.palette.basic.border}`,
  },
  label: {
    display: 'block',
    fontSize: globalStyles.fontSize.small,
    marginBottom: '0.8rem',
  },
}));
