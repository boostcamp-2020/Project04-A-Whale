import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyBucketListPage from './components/pages/MyBucketListPage';
import MyBucketListDetailPage from './components/pages/MyBucketListDetailPage';
import pathURI from './constants/path';
import BucketCreatePage from './components/pages/BucketCreatePage';

const routes = () => (
  <Switch>
    <Route exact path={pathURI.myBucketList} component={MyBucketListPage} />
    <Route exact path={pathURI.myBucketListDetail} component={MyBucketListDetailPage} />
    <Route path={pathURI.login} />
    <Route path={pathURI.register} />
    <Route exact path={pathURI.bucketcreate} component={BucketCreatePage} />
  </Switch>
);

export default routes;
