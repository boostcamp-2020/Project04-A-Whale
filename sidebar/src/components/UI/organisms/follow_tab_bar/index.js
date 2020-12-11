import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useDispatch, useSelector } from 'react-redux';
import UserItem from '../../molecules/user_item';
import Span from '../../atoms/span';

const FollowTabBar = ({ value, setValue, followed, following }) => {
  const searchResult = useSelector((state) => state.follow.search);
  const tabLabels = ['팔로우 목록', '팔로워 목록', '검색 결과'];
  const tabClickHandler = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={tabClickHandler}>
          {tabLabels.map((label, i) => (
            <Tab key={i} label={label} />
          ))}
        </Tabs>
      </AppBar>
      <div>
        {[following, followed, searchResult].map((v, index) => {
          return (
            <div hidden={value !== index}>
              {typeof v === 'undefined' ? (
                <Span content="검색 결과가 없습니다." />
              ) : (
                v.map((user) => {
                  return <UserItem user={user} />;
                })
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FollowTabBar;
