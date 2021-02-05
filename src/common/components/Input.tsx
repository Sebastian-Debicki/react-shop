import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { theme } from 'core';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholderColor?: 'light' | 'primary';
}

export const Input: React.FC<Props> = ({
  label,
  placeholderColor = 'light',
  ...rest
}) => (
  <Container>
    {label && <Label>{label}</Label>}
    <StyledInput placeholderColor={placeholderColor} {...rest} />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<Pick<Props, 'placeholderColor'>>`
  height: 4.8rem;
  flex: 1;
  padding: 1.6rem;
  font-size: ${theme.fontSize.small};
  border-radius: ${theme.borderRadius.normal};
  border: 1px solid ${theme.palette.basic.border};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) =>
      props.placeholderColor === 'primary'
        ? theme.palette.primary.main
        : theme.palette.basic.disabled};
    font-size: ${theme.fontSize.small};
    opacity: 1;
  }
`;

const Label = styled.label`
  display: block;
  font-size: ${theme.fontSize.small};
  margin-bottom: 0.8rem;
`;
