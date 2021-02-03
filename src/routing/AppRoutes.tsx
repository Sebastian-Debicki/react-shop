import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login, Products } from 'modules';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={Products} />
      <Route path={AppRoute.login} component={Login} />

      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
