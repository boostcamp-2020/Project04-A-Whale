import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Span from '../../atoms/span/Span';
import { loadPresetAction } from '../../../../modules/actions/createbucket';
import { getDetails } from '../../../../lib/api';

const SearchResultItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleStyle = {
  fontWeight: 'bold',
  fontSize: '16px',
  marginLeft: '7px',
};

const DesignerStyle = {
  fontSize: '12px',
  marginLeft: '12px',
  textAlign: 'center',
  verticalAlign: 'center',
};

const RefNumStyle = {
  fontSize: '10px',
  paddingLeft: '10px',
  textAlign: 'center',
  verticalAlign: 'center',
};

const SearchResultItem = ({ bucket, loadPresetActionConnect }) => {
  const { no, title, description, refCount, nickname } = bucket;

  const onClickHandler = async () => {
    console.log('clicked!');
    // const { details } = await getDetails(no);
    const { details } = {
      message: '버킷 상세 목록 조회 성공',
      details: [
        {
          no: 1,
          title: '세부목표1',
          status: 'O',
          dueDate: '2020-12-25',
          createdAt: '2020-11-26 21:10:27',
          updatedAt: '2020-11-26 21:10:27',
          deletedAt: null,
          bucketNo: 1,
        },
        {
          no: 2,
          title: '세부목표2',
          status: 'O',
          dueDate: '2020-12-25',
          createdAt: '2020-11-26 21:10:27',
          updatedAt: '2020-11-26 21:10:27',
          deletedAt: null,
          bucketNo: 1,
        },
        {
          no: 3,
          title: '세부목표3',
          status: 'O',
          dueDate: '2020-12-25',
          createdAt: '2020-11-26 21:10:27',
          updatedAt: '2020-11-26 21:10:27',
          deletedAt: null,
          bucketNo: 1,
        },
        {
          no: 6,
          title: '세부목표6',
          status: 'O',
          dueDate: '2020-11-29',
          createdAt: '2020-11-27 00:38:38',
          updatedAt: '2020-11-30 00:38:39',
          deletedAt: null,
          bucketNo: 1,
        },
        {
          no: 4,
          title: '세부목표4',
          status: 'A',
          dueDate: '2020-11-27',
          createdAt: '2020-11-27 00:36:29',
          updatedAt: '2020-11-27 00:36:31',
          deletedAt: null,
          bucketNo: 1,
        },
        {
          no: 5,
          title: '세부목표5',
          status: 'A',
          dueDate: '2020-11-28',
          createdAt: '2020-11-27 00:36:46',
          updatedAt: '2020-11-29 00:36:47',
          deletedAt: null,
          bucketNo: 1,
        },
      ],
    };
    loadPresetActionConnect({
      bucketTitle: title,
      bucketDescription: description,
      bucketDetails: details,
    });
  };

  return (
    <SearchResultItemWrapper onClick={onClickHandler}>
      <Span name="bucketTitle" style={TitleStyle} content={title} />
      <Span name="bucketDesigner" style={DesignerStyle} content={`@${nickname}`} />
      <Span name="bucketRefNum" style={RefNumStyle} content={`(${refCount}건)`} />
    </SearchResultItemWrapper>
  );
};

export default connect(null, { loadPresetActionConnect: loadPresetAction })(SearchResultItem);
