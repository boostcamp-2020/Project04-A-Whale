import React from 'react';
import MyBucketList from '../templates/my_bucket_list';
import Header from '../UI/organisms/header';

const MyBucketListPage = () => {
  const bucketList = [
    { title: '목표1', id: 1, description: 'desc' },
    { title: '목표2', id: 2, description: 'desc' },
    { title: '목표3', id: 3, description: 'desc' },
    { title: '목표4', id: 4, description: 'desc' },
    { title: '목표5', id: 5, description: 'desc' },
    { title: '목표6', id: 6, description: 'desc' },
    { title: '목표7', id: 7, description: 'desc' },
    { title: '목표8', id: 8, description: 'desc' },
    { title: '목표9', id: 9, description: 'desc' },
    { title: '목표10', id: 10, description: 'desc' },
  ];

  return (
    <>
      <Header title="내 목표" />
      <MyBucketList bucketList={bucketList} />
    </>
  );
};

export default MyBucketListPage;
