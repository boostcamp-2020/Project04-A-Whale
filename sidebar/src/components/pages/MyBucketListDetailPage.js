import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../modules/details';
import Spinner from '../UI/atoms/spinner';
import Header from '../UI/organisms/header';
import MyBucketListDetail from '../templates/my_bucket_list_detail';

const MyBucketListDetailPage = () => {
  const location = useLocation();
  const { bucket } = location.state;
  const dispatch = useDispatch();
  const { details, loadingDetails } = useSelector(({ details, loading }) => ({
    details: details.details,
    loadingDetails: loading['details/GET_DETAILS'],
  }));

  useEffect(() => {
    dispatch(getDetails(bucket.no));
  }, [dispatch]);

  return (
    <>
      <Header title="내 목표" isGoBack />
      {loadingDetails && <Spinner />}
      {!loadingDetails && details && <MyBucketListDetail bucket={bucket} details={details} />}
    </>
  );
};

export default MyBucketListDetailPage;
