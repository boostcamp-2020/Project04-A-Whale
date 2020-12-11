import React from 'react';
import { Switch } from 'react-router-dom';
import pathURI from './constants/path';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
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
import SettingPage from './components/pages/SettingPage';
import LogoutPage from './components/pages/LogoutPage';

const routes = () => {
  return (
    <Switch>
      <PublicRoute restricted component={LoginPage} path={pathURI.login} exact />
      <PublicRoute restricted component={RegisterPage} path={pathURI.register} exact />
      <PrivateRoute component={MyBucketListPage} path={pathURI.myBucketList} exact />
      <PrivateRoute component={MyBucketListDetailPage} path={pathURI.myBucketListDetail} exact />
      <PrivateRoute component={BucketCreatePage} path={pathURI.bucketcreate} exact />
      <PrivateRoute component={AchieveCreatePage} path={pathURI.achieveCreate} exact />
      <PrivateRoute component={FeedPage} path={pathURI.feed} exact />
      <PrivateRoute component={SettingPage} path={pathURI.setting} exact />
      <PrivateRoute component={LogoutPage} path={pathURI.logout} exact />
      <PrivateRoute component={FollowListPage} path={pathURI.follow} />
      <PrivateRoute component={UserInfoPage} path={pathURI.userInfo} />
    </Switch>
  );
};

export default routes;
