import React from 'react';
import BucketCreateTemplate from '../templates/bucket_create_template/BucketCreateTemplate';
import Header from '../UI/organisms/header';

const BucketCreatePage = () => {
  return (
    <>
      <Header title="내 목표 생성" isGoBack />
      <BucketCreateTemplate />
    </>
  );
};

export default BucketCreatePage;
