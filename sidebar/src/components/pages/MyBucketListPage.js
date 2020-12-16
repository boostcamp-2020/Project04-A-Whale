import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBuckets } from '../../modules/buckets';
import Spinner from '../UI/atoms/spinner';
import MyBucketList from '../templates/my_bucket_list';
import Header from '../UI/organisms/header';
import { getWhaleLocalStorage } from '../../lib/whaleLocalStorage';

const MyBucketListPage = () => {
  const dispatch = useDispatch();
  const { buckets, loadingBuckets } = useSelector(({ buckets, loading }) => ({
    buckets: buckets.buckets,
    loadingBuckets: loading['buckets/GET_BUCKETS'],
  }));

  const [isExt, setIsExt] = useState(true);

  useEffect(() => {
    try {
      const api = '/api/buckets';
      if (isExt === false) {
        dispatch(getBuckets());
      } else if (isExt === true) {
        getWhaleLocalStorage([api], (items) => {
          if (items[api] === 'modified' || JSON.stringify(items[api]) === '{}') {
            console.log('버킷 받아옴');
            dispatch(getBuckets());
          }
        });
      }
    } catch (error) {
      console.log(error);
      setIsExt(false);
      dispatch(getBuckets());
    }
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
