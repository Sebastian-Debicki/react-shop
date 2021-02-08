import React from 'react';
import {
  FormControlLabel,
  CheckboxProps,
  Checkbox as MaterialCheckbox,
  makeStyles,
} from '@material-ui/core';

import { Checked, Unchecked } from 'assets/icons';

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
          checkedIcon={<Checked />}
          icon={<Unchecked />}
        />
      }
      label={label}
    />
  );
};

const useStyles = makeStyles((theme) => ({}));
