import React from 'react';
import BucketCreateButton from '../../molecules/bucket_create_button';
import { ButtonsWrapper } from './style.js'

const Buttons = () => {
  return (
    <ButtonsWrapper>
      <BucketCreateButton />
    </ButtonsWrapper>
  );
};

export default Buttons;
