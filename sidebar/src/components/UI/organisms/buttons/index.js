import React from 'react';
import styled from 'styled-components';
import BucketCreateButton from '../../molecules/bucket_create_button';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 15px;
`;

const Buttons = () => {
  return (
    <ButtonsWrapper>
      <BucketCreateButton />
    </ButtonsWrapper>
  );
};

export default Buttons;
