import React from 'react';
import { useSelector } from 'react-redux';
import DetailAdder from '../../molecules/detail_adder';
import CreateDetailListItem from '../../molecules/create_detail_list_item';
import DetailListWrapper from './style';

const CreateDetailList = () => {
  const { details } = useSelector(({ createbucket }) => createbucket);

  const Details = (items) => {
    return items.map((item) => {
      return <CreateDetailListItem detail={item} />;
    });
  };

  return (
    <DetailListWrapper>
      <DetailAdder />
      {Details(details)}
    </DetailListWrapper>
  );
};

export default CreateDetailList;
