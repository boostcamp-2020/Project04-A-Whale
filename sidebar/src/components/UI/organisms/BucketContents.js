import React from 'react';
import styled from 'styled-components';
import BucketInputText from '../molecules/BucketInputText';

const BucketContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`;

const titleStyle = {
  width: '100%',
};

const decriptionStyle = {
  marginTop: '15px',
  width: '100%',
};

const BucketContents = () => {
  return (
    <BucketContentsWrapper>
      <BucketInputText style={titleStyle} label="목표 Title 작성" />
      <BucketInputText style={decriptionStyle} label="목표 Description 작성" />
    </BucketContentsWrapper>
  );
};

export default BucketContents;
