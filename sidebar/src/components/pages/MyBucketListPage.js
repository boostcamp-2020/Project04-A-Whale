import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBuckets } from '../../modules/buckets';
import Spinner from '../UI/atoms/spinner';
import MyBucketList from '../templates/my_bucket_list';
import Header from '../UI/organisms/header';

const MyBucketListPage = () => {
  const dispatch = useDispatch();
  const { buckets, loadingBuckets } = useSelector(({ buckets, loading }) => ({
    buckets: buckets.buckets,
    loadingBuckets: loading['buckets/GET_BUCKETS'],
  }));

  useEffect(() => {
    dispatch(getBuckets());
  }, [dispatch]);

  return (
    <>
      <Header title="내 목표" />
      {loadingBuckets && <Spinner />}
      {!loadingBuckets && buckets && <MyBucketList buckets={buckets} />}
    </>
  );
};

export default MyBucketListPage;
