import React from 'react';
import FollowListTemplate from '../templates/follow_list_template';
import Header from '../UI/organisms/header';
import useFollowed from '../../lib/useFollowed';
import useFollowing from '../../lib/useFollowing';

const FollowListPage = () => {
  const followed = useFollowed();
  const following = useFollowing();

  return (
    <>
      <Header title="팔로우 리스트" isGoBack />
      <FollowListTemplate followed={followed} following={following} />
    </>
  );
};

export default FollowListPage;
