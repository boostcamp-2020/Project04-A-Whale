import React from 'react';
import styled from 'styled-components';
import BucketSearchBar from '../UI/molecules/BucketSearchBar';
import BucketContents from '../UI/organisms/BucketContents';
import DetailList from '../UI/organisms/DetailList';

const BucketCreateTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BucketCreateTemplate = () => {
  return (
    <BucketCreateTemplateWrapper>
      <BucketSearchBar />
      <BucketContents />
      <DetailList />
    </BucketCreateTemplateWrapper>
  );
};

export default BucketCreateTemplate;
