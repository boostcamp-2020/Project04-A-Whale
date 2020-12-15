import React from 'react';
import { ModifyButtonWrapper, ModifyButtonImg } from './style';

const ModifyButton = ({ width, onClick }) => {
  return (
    <ModifyButtonWrapper type="button" onClick={onClick}>
      <ModifyButtonImg src="/pencil.png" alt="pencil" width={width} />
    </ModifyButtonWrapper>
  );
};

export default ModifyButton;
