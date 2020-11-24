import React from 'react';
import MyBucketList from '../templates/MyBucketList';
import Menu from '../templates/Menu';

const MyBucketListPage = () => {
  const bucketList = [
    '목표1',
    '목표2',
    '목표3',
    '목표4',
    '목표5',
    '목표6',
    '목표7',
    '목표8',
    '목표9',
    '목표10',
  ];

  return (
    <>
      <Menu title="내 목표" />
      <MyBucketList bucketList={bucketList} />
    </>
  );
};

export default MyBucketListPage;
