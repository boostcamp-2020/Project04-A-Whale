import React from 'react';
import MyBucketList from '../templates/MyBucketList';
import Menu from '../templates/Menu';

const MyBucketListPage = () => {
  const bucketList = [
    'a',
    'b',
    'c',
    'd',
    'a',
    'b',
    'c',
    'd',
    'a',
    'b',
    'c',
    'd',
    'a',
    'b',
    'c',
    'd',
  ];

  return (
    <>
      <Menu title="내 목표" />
      <MyBucketList bucketList={bucketList} />
    </>
  );
};

export default MyBucketListPage;
