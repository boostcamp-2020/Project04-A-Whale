import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeeds } from '../../modules/feeds';
import Spinner from '../UI/atoms/spinner';
import Header from '../UI/organisms/header';
import Feed from '../templates/feed';

const FeedPage = () => {
  const dispatch = useDispatch();
  const { feeds, loadingFeeds } = useSelector(({ feeds, loading }) => ({
    feeds: feeds.feeds,
    loadingFeeds: loading['feeds/GET_FEEDS'],
  }));

  useEffect(() => {
    dispatch(getFeeds());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(getFeeds());
  };

  return (
    <>
      <Header title="피드" />
      {loadingFeeds && <Spinner />}
      {!loadingFeeds && feeds && <Feed feeds={feeds} handleRefresh={handleRefresh} />}
    </>
  );
};

export default FeedPage;
