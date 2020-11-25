import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pathURI from './constants/path';
import AchieveCreate from './components/pages/AchieveCreate';
import AchieveResult from './components/pages/AchieveResult';

const routes = () => (
  <Switch>
    <Route exact path={pathURI.home} />
    <Route exact path={pathURI.login} />
    <Route exact path={pathURI.register} />
    <Route exact path={pathURI.achieveCreate} component={AchieveCreate} />
    <Route exact path={pathURI.achieveResult} component={AchieveResult} />
  </Switch>
);

export default routes;
