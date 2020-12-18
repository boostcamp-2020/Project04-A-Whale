import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetBucketAction } from '../../modules/actions/createbucket';
import BucketCreateTemplate from '../templates/bucket_create_template';
import Header from '../UI/organisms/header';

const BucketCreatePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetBucketAction());
    };
  }, [dispatch]);
  return (
    <>
      <Header title="내 목표 생성" isGoBack />
      <BucketCreateTemplate />
    </>
  );
};

export default BucketCreatePage;
