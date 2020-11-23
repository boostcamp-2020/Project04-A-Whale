import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pathURI from './constants/path';

const routes = () => (
  <Switch>
    <Route exact path={pathURI.home} />
    <Route exact path={pathURI.login} />
    <Route exact path={pathURI.register} />
  </Switch>
);

export default routes;
