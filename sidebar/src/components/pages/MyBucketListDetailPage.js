import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../UI/organisms/header';
import MyBucketListDetail from '../templates/my_bucket_list_detail';

const MyBucketListDetailPage = () => {
  const location = useLocation();
  const { bucket } = location.state;

  return (
    <>
      <Header title="내 목표" isGoBack />
      <MyBucketListDetail bucket={bucket} />
    </>
  );
};

export default MyBucketListDetailPage;
