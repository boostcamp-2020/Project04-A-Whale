import React from 'react';
import styled from 'styled-components';
import BucketCreateButton from '../molecules/BucketCreateButton';
import ResetButton from '../molecules/ResetButton';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 15px;
`;

const Buttons = ({ onReset }) => {
  return (
    <ButtonsWrapper>
      <BucketCreateButton />
      <ResetButton onReset={onReset} />
    </ButtonsWrapper>
  );
};

export default Buttons;