import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBuckets } from '../../modules/buckets';
import MyBucketList from '../templates/my_bucket_list';
import Header from '../UI/organisms/header';

const MyBucketListPage = ({ getBuckets, buckets, loadingBuckets }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getBuckets();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getBuckets]);

  return (
    <>
      <Header title="내 목표" />
      <MyBucketList loadingBuckets={loadingBuckets} buckets={buckets} />
    </>
  );
};

export default connect(
  ({ buckets, loading }) => ({
    buckets: buckets.buckets,
    loadingBuckets: loading['buckets/GET_BUCKETS'],
  }),
  {
    getBuckets,
  }
)(MyBucketListPage);
