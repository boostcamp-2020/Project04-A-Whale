import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBuckets } from '../../modules/buckets';
import MyBucketList from '../templates/my_bucket_list';
import Header from '../UI/organisms/header';

const MyBucketListPage = ({ getBuckets, buckets, loadingBuckets }) => {
  useEffect(() => {
    getBuckets();
  }, [getBuckets]);

  return (
    <>
      <Header title="내 목표" />
      <MyBucketList loadingBuckets={loadingBuckets} buckets={buckets} />
    </>
  );
};

export default connect(
  ({ buckets }) => ({
    buckets: buckets.buckets,
    loadingBuckets: buckets.loading.GET_BUCKETS,
  }),
  {
    getBuckets,
  }
)(MyBucketListPage);
