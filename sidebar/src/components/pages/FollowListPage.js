import React from 'react';
import FollowListTemplate from '../templates/follow_list_template';
import Header from '../UI/organisms/header';
import useFollowed from '../../hooks/useFollowed';
import useFollowing from '../../hooks/useFollowing';

const FollowListPage = () => {
  const followed = useFollowed();
  const following = useFollowing();

  return (
    <>
      <Header title="팔로우" isGoBack />
      <FollowListTemplate followed={followed} following={following} />
    </>
  );
};

export default FollowListPage;
