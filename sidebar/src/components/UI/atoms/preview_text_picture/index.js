import React from 'react';
import styled from 'styled-components';

const PreviewTextPicture = ({ text }) => {
  return (
    <PreviewText>
      <MarkDownArea>{text}</MarkDownArea>
    </PreviewText>
  );
};

const PreviewText = styled.div`
  width: 100%;
`;

const MarkDownArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 10rem;
  margin: 0;
`;

export default PreviewTextPicture;
