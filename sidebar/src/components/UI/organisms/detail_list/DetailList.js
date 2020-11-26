import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import DetailAdder from '../../molecules/detail_adder/DetailAdder';
import DetailListItem from '../../molecules/detail_list_item/DetailListItem';
import { addDetailAction, removeDetailAction } from '../../../../modules/actions/createbucket';

const DetailListWrapper = styled.div`
  padding: 15px;
`;

const DetailList = ({ details }) => {
  // TODO : state로 바꿔야함
  const Details = (items) => {
    return items.map((item) => {
      return <DetailListItem detail={item} />;
    });
  };

  return (
    <DetailListWrapper>
      <DetailAdder />
      {Details(details)}
    </DetailListWrapper>
  );
};

const mapStateToProps = (state) => ({ details: state.createbucket.details });

export default connect(mapStateToProps, { addDetailAction, removeDetailAction })(DetailList);
