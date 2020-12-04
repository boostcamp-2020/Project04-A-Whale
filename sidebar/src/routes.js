import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyBucketListPage from './components/pages/MyBucketListPage';
import MyBucketListDetailPage from './components/pages/MyBucketListDetailPage';
import pathURI from './constants/path';

import BucketCreatePage from './components/pages/BucketCreatePage';
import AchieveCreate from './components/pages/AchieveCreatePage';
import AchieveResult from './components/pages/AchieveResultPage';

const routes = () => (
  <Switch>
    <Route exact path={pathURI.login} />
    <Route exact path={pathURI.register} />
    <Route exact path={pathURI.myBucketList} component={MyBucketListPage} />
    <Route exact path={pathURI.myBucketListDetail} component={MyBucketListDetailPage} />
    <Route exact path={pathURI.bucketcreate} component={BucketCreatePage} />
    <Route exact path={pathURI.achieveCreate} component={AchieveCreate} />
    <Route exact path={pathURI.achieveResult} component={AchieveResult} />
  </Switch>
);

export default routes;
