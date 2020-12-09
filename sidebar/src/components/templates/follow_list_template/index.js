import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserSearch from '../../UI/organisms/user_search';
import FollowTabBar from '../../UI/organisms/follow_tab_bar';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const FollowListTemplate = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header} />
      <UserSearch />
      <FollowTabBar />
    </>
  );
};

export default FollowListTemplate;
