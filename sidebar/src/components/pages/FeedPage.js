import React from 'react';
import Header from '../UI/organisms/header';
import Feed from '../templates/feed';

const FeedPage = () => {
  return (
    <>
      <Header title="피드" />
      <Feed />
    </>
  );
};

export default FeedPage;
