import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyBucketListPage from './components/pages/MyBucketListPage';
import pathURI from './constants/path';

const routes = () => (
  <Switch>
    <Route exact path={pathURI.home} component={MyBucketListPage} />
    <Route path={pathURI.login} />
    <Route path={pathURI.register} />
  </Switch>
);

export default routes;
