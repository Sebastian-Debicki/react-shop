import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing';
import { Button, Input } from 'common';

export const Login = () => {
  return (
    <>
      <Link to={AppRoute.home}>Products page</Link>
      <h2>Login</h2>
      <Form>
        <Input label='Login' placeholder='Enter username' />
        <Input label='Password' placeholder='Enter password' />
        <Button variant='filled'>Normal button</Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  width: 50%;
`;
