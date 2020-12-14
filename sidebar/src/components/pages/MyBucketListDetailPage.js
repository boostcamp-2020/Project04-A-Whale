import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../modules/details';
import Spinner from '../UI/atoms/spinner';
import Header from '../UI/organisms/header';
import MyBucketListDetail from '../templates/my_bucket_list_detail';

const MyBucketListDetailPage = ({ match }) => {
  const { bucketNo } = match.params;
  const dispatch = useDispatch();
  const { bucket, details, loadingDetails, burnDownChart } = useSelector(
    ({ details, loading }) => ({
      bucket: details.bucket,
      details: details.details,
      burnDownChart: details.burnDownChart,
      loadingDetails: loading['details/GET_DETAILS'],
    })
  );

  // useEffect(() => {
  //   const api = `/api/details/${bucketNo}`;
  //   chrome.storage.local.get(api, (items) => {
  //     if (items[api] === 'modified' || JSON.stringify(items) === '{}') {
  //       console.log('디테일 받아옴');
  //       dispatch(getDetails(bucketNo));
  //     }
  //   });
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getDetails(bucketNo));
  }, [dispatch]);

  return (
    <>
      <Header title="내 목표 상세" isGoBack />
      {loadingDetails && <Spinner />}
      {!loadingDetails && details && (
        <MyBucketListDetail bucket={bucket} details={details} burnDownChart={burnDownChart} />
      )}
    </>
  );
};

export default MyBucketListDetailPage;
