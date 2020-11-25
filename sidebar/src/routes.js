import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pathURI from './constants/path';
import AchieveCreate from './components/templates/achieve_create/AchieveCreate';

const routes = () => (
  <Switch>
    <Route exact path={pathURI.home} />
    <Route exact path={pathURI.login} />
    <Route exact path={pathURI.register} />
    <Route exact path={pathURI.achieveCreate} component={AchieveCreate} />
    <Route exact path={pathURI.achieveResult} />
  </Switch>
);

export default routes;
