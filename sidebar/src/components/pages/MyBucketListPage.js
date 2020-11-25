import React from 'react';
import MyBucketList from '../templates/my_bucket_list';
import Header from '../UI/organisms/header';

const MyBucketListPage = () => {
  const bucketList = [
    { title: '목표1', id: 1 },
    { title: '목표2', id: 2 },
    { title: '목표3', id: 3 },
    { title: '목표4', id: 4 },
    { title: '목표5', id: 5 },
    { title: '목표6', id: 6 },
    { title: '목표7', id: 7 },
    { title: '목표8', id: 8 },
    { title: '목표9', id: 9 },
    { title: '목표10', id: 10 },
  ];

  return (
    <>
      <Header title="내 목표" />
      <MyBucketList bucketList={bucketList} />
    </>
  );
};

export default MyBucketListPage;
