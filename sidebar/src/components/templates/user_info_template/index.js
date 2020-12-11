import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserInfo from '../../UI/organisms/user_info';
import FollowButton from '../../UI/molecules/follow_button';
import UserBuckets from '../../UI/organisms/user_buckets';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const UserInfoTemplate = ({ userNo }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header} />
      <UserInfo />
      <FollowButton userNo={userNo} />
      <UserBuckets />
    </>
  );
};

export default UserInfoTemplate;
