import React from 'react';
import styled from 'styled-components';
import BucketSearchBar from '../UI/molecules/BucketSearchBar';
import BucketContents from '../UI/organisms/BucketContents';
import DetailList from '../UI/organisms/DetailList';
import Title from '../UI/molecules/Title';
import Buttons from '../UI/organisms/Buttons';

const BucketCreateTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const BucketCreateTemplate = ({ title, description, onReset }) => {
  return (
    <BucketCreateTemplateWrapper>
      <Title />
      <BucketSearchBar />
      <BucketContents title={title} description={description} />
      <DetailList />
      <Buttons onReset={onReset} />
    </BucketCreateTemplateWrapper>
  );
};

export default BucketCreateTemplate;
