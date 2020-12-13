import React, { useState } from 'react';
import UserSearch from '../../UI/organisms/user_search';
import FollowTabBar from '../../UI/organisms/follow_tab_bar';
import useStyles from './style';

const FollowListTemplate = ({ followed, following }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <>
      <div className={classes.header} />
      <UserSearch setValue={setValue} />
      <FollowTabBar value={value} setValue={setValue} followed={followed} following={following} />
    </>
  );
};

export default FollowListTemplate;
