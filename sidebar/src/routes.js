import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pathURI from './constants/path';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import MyBucketListPage from './components/pages/MyBucketListPage';
import MyBucketListDetailPage from './components/pages/MyBucketListDetailPage';
import BucketCreatePage from './components/pages/BucketCreatePage';
import AchieveCreatePage from './components/pages/AchieveCreatePage';
import AchieveResultPage from './components/pages/AchieveResultPage';
import FollowListPage from './components/pages/FollowListPage';
import UserInfoPage from './components/pages/UserInfoPage';
import FeedPage from './components/pages/FeedPage';

const routes = () => (
  <Switch>
    <Route exact path={pathURI.login} component={LoginPage} />
    <Route exact path={pathURI.register} component={RegisterPage} />
    <Route exact path={pathURI.myBucketList} component={MyBucketListPage} />
    <Route exact path={pathURI.myBucketListDetail} component={MyBucketListDetailPage} />
    <Route exact path={pathURI.bucketcreate} component={BucketCreatePage} />
    <Route exact path={pathURI.achieveCreate} component={AchieveCreatePage} />
    <Route exact path={pathURI.achieveResult} component={AchieveResultPage} />
    <Route exact path={pathURI.follow} component={FollowListPage} />
    <Route exact path={pathURI.userInfo} component={UserInfoPage} />
    <Route exact path={pathURI.feed} component={FeedPage} />
  </Switch>
);

export default routes;
