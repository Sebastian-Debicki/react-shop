import React from 'react';
import {
  FormControlLabel,
  CheckboxProps,
  Checkbox as MaterialCheckbox,
} from '@material-ui/core';

interface Props extends CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<Props> = ({
  checked,
  label,
  onChange,
  ...rest
}) => (
  <FormControlLabel
    control={
      <MaterialCheckbox
        {...rest}
        checked={checked}
        onChange={() => onChange()}
        name={label}
        color='primary'
        size='medium'
      />
    }
    label={label}
  />
);
