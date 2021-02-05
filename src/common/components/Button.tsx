import React from 'react';
import styled from 'styled-components';

import { theme } from 'core';

interface Props {
  variant: 'filled' | 'outline';
}

export const Button: React.FC<Props> = ({ children, variant, ...rest }) => {
  const button = {
    filled: <FilledButton {...rest}>{children}</FilledButton>,
    outline: <OutlineButton {...rest}>{children}</OutlineButton>,
  }[variant];

  return button;
};

const button = styled.button`
  display: block;
  border: none;
  width: 100%;
  padding: ${theme.fontSize.normal};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSize.small};
  font-family: 'Nunito', sans-serif;
`;

const FilledButton = styled(button)`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.basic.white};
`;

const OutlineButton = styled(button)`
  background-color: ${theme.palette.basic.white};
  border: 1px solid ${theme.palette.primary.main};
  color: 1px solid ${theme.palette.primary.main};
`;
