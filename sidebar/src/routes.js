import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pathURI from './constants/path';
import BucketCreatePage from './components/pages/BucketCreatePage';

const routes = () => (
  <Switch>
    <Route exact path={pathURI.home} />
    <Route exact path={pathURI.login} />
    <Route exact path={pathURI.register} />
    <Route exact path={pathURI.bucketcreate} component={BucketCreatePage} />
  </Switch>
);

export default routes;
