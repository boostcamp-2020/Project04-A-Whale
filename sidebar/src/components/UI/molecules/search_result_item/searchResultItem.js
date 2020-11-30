import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Span from '../../atoms/span/Span';
import { loadPresetAction } from '../../../../modules/actions/createbucket';

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
  const { no, title, refCount, nickname } = bucket;
  console.log(no, title, refCount, nickname);

  const onClickHandler = () => {
    loadPresetActionConnect(bucketData);
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
