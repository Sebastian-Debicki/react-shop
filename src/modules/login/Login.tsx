import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { ReactComponent as _Logo } from 'assets/icons/logo.svg';
import loginImage from 'assets/images/Bitmap.png';
import { AppRoute } from 'routing';
import * as Common from 'common';
import { breakpoints, theme } from 'core';

export const Login = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <Image src={loginImage} />

      <FormContainer>
        <Logo onClick={() => history.push(AppRoute.home)} />
        <Form>
          <Header>Login</Header>
          <Input label='Login' placeholder='Enter username' />
          <Common.Input label='Password' placeholder='Enter password' />
          <Button variant='filled'>Log in</Button>
          <ForgotButton>Forgot password?</ForgotButton>
        </Form>
      </FormContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.l}) {
    grid-template-columns: auto 1fr;
  }
`;

const Image = styled.img`
  display: none;

  @media (min-width: ${breakpoints.l}) {
    height: 100vh;
    display: block;
  }
`;

const Logo = styled(_Logo)`
  margin-top: 4rem;
  margin-left: 2.4rem;

  @media (min-width: ${breakpoints.m}) {
    margin-top: 5.2rem;
  }
`;

const Header = styled.h2`
  font-size: ${theme.fontSize.header2};
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15vh 85vh;
  justify-content: center;

  @media (min-width: ${breakpoints.s}) {
    grid-template-columns: 49.6rem;
    grid-template-rows: 25vh 75vh;
  }

  @media (min-width: ${breakpoints.xl}) {
    justify-content: flex-start;
    margin-left: 15rem;
  }
`;

const Form = styled.form`
  margin: 2.4rem;
`;

const Button = styled(Common.Button)`
  margin-top: 5.6rem;
`;

const Input = styled(Common.Input)`
  margin-bottom: 2.2rem;
`;

const ForgotButton = styled.button`
  color: ${theme.palette.basic.disabled};
  margin-top: 1.6rem;
  text-decoration: underline;
  border: none;
  background-color: none;
  font-size: 1.4rem;
`;
