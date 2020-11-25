import React from 'react';
import DetailAdder from '../molecules/DetailAdder';
import DetailListItem from '../molecules/DetailListItem';

const DetailList = () => {
  // TODO : state로 바꿔야함
  const data = ['Detail 1'];

  const Details = (items) => {
    return items.map((item) => {
      return <DetailListItem detail={item} />;
    });
  };

  return (
    <>
      <DetailAdder />
      {Details(data)}
    </>
  );
};

export default DetailList;
