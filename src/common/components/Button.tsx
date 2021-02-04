import React from 'react';
import styled from 'styled-components';

import { theme } from 'core';

interface Props {
  variant: 'filled' | 'outline';
}

export const Button: React.FC<Props> = ({ children, variant }) => {
  const button = {
    filled: <FilledButton>{children}</FilledButton>,
    outline: <OutlineButton>{children}</OutlineButton>,
  }[variant];

  return button;
};

const button = styled.button`
  border: none;
  width: 100%;
  padding: 1.6rem;
  border-radius: ${theme.borderRadius.small};
  font-size: 1.4rem;
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
