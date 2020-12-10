import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../modules/details';
import Spinner from '../UI/atoms/spinner';
import Header from '../UI/organisms/header';
import MyBucketListDetail from '../templates/my_bucket_list_detail';
import getFormatDate from '../../lib/date';

const MyBucketListDetailPage = ({ match }) => {
  const { bucketNo } = match.params;
  const dispatch = useDispatch();
  const detailTot = useSelector((state) => state.details);
  const { bucket, details, loadingDetails } = useSelector(({ details, loading }) => ({
    bucket: details.bucket,
    details: details.details,
    loadingDetails: loading['details/GET_DETAILS'],
  }));

  useEffect(() => {
    dispatch(getDetails(bucketNo));
  }, [dispatch]);

  const alarmOnHandler = () => {
    const today = new Date();
    details.openDetails.forEach((detail) => {
      if (getFormatDate(today) === getFormatDate(new Date(detail.dueDate))) {
        whale.runtime.sendMessage({ message: 'dueDateCheck', detail });
      }
    });
  };

  return (
    <>
      <Header title="내 목표 상세" isGoBack />
      {loadingDetails && <Spinner />}
      {!loadingDetails && details && (
        <MyBucketListDetail bucket={bucket} details={details} detailTot={detailTot} />
      )}
      <input type="button" value="alarmsOn" onClick={alarmOnHandler} />
    </>
  );
};

export default MyBucketListDetailPage;
