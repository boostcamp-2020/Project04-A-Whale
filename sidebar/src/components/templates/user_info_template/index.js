import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserInfo from '../../UI/organisms/user_info';
import FollowButton from '../../UI/molecules/follow_button';
import UserBuckets from '../../UI/organisms/user_buckets';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: '#555555',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

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
