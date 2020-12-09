import React from 'react';
import FollowListTemplate from '../templates/follow_list_template';
import Header from '../UI/organisms/header';

const FollowListPage = () => {
  return (
    <>
      <Header title="팔로우 리스트" isGoBack />
      <FollowListTemplate />
    </>
  );
};

export default FollowListPage;
