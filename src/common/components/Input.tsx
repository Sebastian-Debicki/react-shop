import React, { InputHTMLAttributes } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { theme } from 'core';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerStyles?: CSSProperties;
  placeholderColor?: 'light' | 'primary';
}

export const Input: React.FC<Props> = ({
  label,
  placeholderColor = 'light',
  containerStyles,
  ...rest
}) => (
  <Container style={containerStyles}>
    {label && <Label>{label}</Label>}
    <StyledInput placeholderColor={placeholderColor} {...rest} />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<Pick<Props, 'placeholderColor'>>`
  height: 48px;
  flex: 1;
  padding: 1.6rem;
  font-size: 1.4rem;
  border-radius: ${theme.borderRadius.normal};
  border: 1px solid ${theme.palette.basic.border};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) =>
      props.placeholderColor === 'primary'
        ? theme.palette.primary.main
        : theme.palette.basic.disabled};
    font-size: 1.4rem;
    opacity: 1;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;
