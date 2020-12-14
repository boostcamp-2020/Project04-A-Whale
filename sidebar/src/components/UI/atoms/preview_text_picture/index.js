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
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px;
  overflow: auto;
`;

const MarkDownArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 12rem;
  margin: 0;
`;

export default PreviewTextPicture;
