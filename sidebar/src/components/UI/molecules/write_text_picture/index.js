import React from 'react';
import styled from 'styled-components';

const WriteTextPicture = ({ placeholder, text, onChange }) => {
  return (
    <WriteText>
      <TextArea placeholder={placeholder} value={text} onChange={onChange} />
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
  height: 10rem;
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
