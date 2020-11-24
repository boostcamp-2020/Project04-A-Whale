import React from 'react';
import styled from 'styled-components';

const WriteTextPicture = ({ placeholder, text }) => {
  return (
    <WriteText>
      <TextArea rows="10" placeholder={placeholder}>
        {text}
      </TextArea>
      <UploadPicture type="file" multiple />
    </WriteText>
  );
};

const WriteText = styled.div`
  width: 100%;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
`;

const UploadPicture = styled.input`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  padding: 10px;
  background-color: #eee;
`;

export default WriteTextPicture;
