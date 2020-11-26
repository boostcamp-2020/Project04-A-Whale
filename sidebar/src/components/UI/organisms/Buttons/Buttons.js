import React from 'react';
import styled from 'styled-components';
import BucketCreateButton from '../../molecules/BucketCreateButton/BucketCreateButton';
import ResetButton from '../../molecules/ResetButton/ResetButton';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 15px;
`;

const Buttons = () => {
  return (
    <ButtonsWrapper>
      <BucketCreateButton />
      <ResetButton />
    </ButtonsWrapper>
  );
};

export default Buttons;
