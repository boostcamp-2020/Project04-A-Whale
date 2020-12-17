import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import { resetSearchResult } from '../../../modules/follow';
import UserItem from '../../UI/molecules/user_item';
import UserSearch from '../../UI/organisms/user_search';

const TabPanel = ({ users, value, index }) => {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value !== 2 &&
        value === index &&
        users &&
        users.map((user, i) => <UserItem key={i} user={user} />)}
      {value === 2 && value === index && (
        <>
          <UserSearch />
          {users && users.length !== 0 ? (
            users.map((user, i) => <UserItem key={i} user={user} />)
          ) : (
            <span className={classes.noResult}>검색 결과가 없습니다</span>
          )}
        </>
      )}
    </div>
  );
};

const FollowListTemplate = ({ followed, following }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.follow.searchResult);
  const [value, setValue] = useState(0);
  const tabItems = ['팔로우', '팔로워', '사용자 검색'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(resetSearchResult());
  };

  const getIdAndAriaControls = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const getUsers = (value) => {
    if (value === '팔로우') return following;
    if (value === '팔로워') return followed;
    return searchResult;
  };

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabItems.map((v, i) => (
            <Tab className={classes.text} key={i} label={v} {...getIdAndAriaControls(i)} />
          ))}
        </Tabs>
      </AppBar>
      <div>
        {tabItems.map((v, i) => (
          <TabPanel key={i} value={value} index={i} users={getUsers(v)} />
        ))}
      </div>
    </main>
  );
};

export default FollowListTemplate;
