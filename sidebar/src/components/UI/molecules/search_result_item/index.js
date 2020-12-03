import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Span from '../../atoms/span';
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
    const { data } = await getDetails(no);
    const { openDetails, achieveDetails } = data.data;
    const details = openDetails.concat(achieveDetails);
    loadPresetActionConnect({
      bucketTitle: title,
      bucketDescription: description,
      bucketDetails: details.map((detail) => {
        return { title: detail.title, status: detail.status, dueDate: detail.dueDate };
      }),
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
