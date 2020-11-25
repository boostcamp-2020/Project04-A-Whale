import React from 'react';
import styled from 'styled-components';
import DetailAdder from '../molecules/DetailAdder';
import DetailListItem from '../molecules/DetailListItem';

const DetailList = ({ details, AddHandler, RemoveHandler }) => {
  // TODO : state로 바꿔야함
  const DetailListWrapper = styled.div`
    padding: 15px;
  `;

  const Details = (items) => {
    return items.map((item) => {
      return <DetailListItem detail={item} RemoveHandler={RemoveHandler} />;
    });
  };

  return (
    <DetailListWrapper>
      <DetailAdder callback={AddHandler} />
      {Details(details)}
    </DetailListWrapper>
  );
};

export default DetailList;
