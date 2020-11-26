import React from 'react';
import styled from 'styled-components';
import BucketSearchBar from '../../UI/molecules/BucketSearchBar/BucketSearchBar';
import BucketContents from '../../UI/organisms/BucketContents/BucketContents';
import DetailList from '../../UI/organisms/DetailList/DetailList';
import Title from '../../UI/molecules/Title/Title';
import Buttons from '../../UI/organisms/Buttons/Buttons';

const BucketCreateTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const BucketCreateTemplate = () => {
  return (
    <BucketCreateTemplateWrapper>
      <Title />
      <BucketSearchBar />
      <BucketContents />
      <DetailList />
      <Buttons />
    </BucketCreateTemplateWrapper>
  );
};

export default BucketCreateTemplate;
