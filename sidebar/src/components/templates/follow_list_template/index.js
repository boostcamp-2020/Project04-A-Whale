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

const FollowListTemplate = ({ followed, following }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header} />
      <UserSearch />
      <FollowTabBar followed={followed} following={following} />
    </>
  );
};

export default FollowListTemplate;
