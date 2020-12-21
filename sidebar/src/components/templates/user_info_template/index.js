import React from 'react';
import UserInfo from '../../UI/organisms/user_info';
import FollowButton from '../../UI/molecules/follow_button';
import UserBuckets from '../../UI/organisms/user_buckets';
import useStyles from './style';

const UserInfoTemplate = ({ userInfo, buckets, userNo }) => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <UserInfo userInfo={userInfo} />
      <FollowButton userNo={userNo} />
      <UserBuckets buckets={buckets} />
    </main>
  );
};

export default UserInfoTemplate;
