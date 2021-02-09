import React from 'react';
import {
  FormControlLabel,
  CheckboxProps,
  Checkbox as MaterialCheckbox,
  makeStyles,
} from '@material-ui/core';

import { Checked, Unchecked } from 'assets/icons';
import { globalStyles } from 'core';

interface Props extends CheckboxProps {
  label: string;
  checked: boolean;
}

export const Checkbox: React.FC<Props> = ({ checked, label, ...rest }) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <MaterialCheckbox
          {...rest}
          name={label}
          color='primary'
          checkedIcon={
            <div className={classes.checkbox}>
              <Checked color='black' />
            </div>
          }
          icon={<Unchecked />}
        />
      }
      label={label}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  checkbox: {
    width: '2.4rem',
    height: '2.4rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: globalStyles.borderRadius.small,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
