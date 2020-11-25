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

const BucketCreateTemplate = ({ details, AddHandler, RemoveHandler }) => {
  return (
    <BucketCreateTemplateWrapper>
      <Title />
      <BucketSearchBar />
      <BucketContents />
      <DetailList details={details} AddHandler={AddHandler} RemoveHandler={RemoveHandler} />
      <Buttons />
    </BucketCreateTemplateWrapper>
  );
};

export default BucketCreateTemplate;
