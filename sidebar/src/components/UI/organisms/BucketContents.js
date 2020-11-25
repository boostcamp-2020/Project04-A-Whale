import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BucketInputText from '../molecules/BucketInputText';
import { inputDescAction, inputTitleAction } from '../../../modules/actions/createbucket';

const BucketContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`;

const titleStyle = {
  width: '100%',
};

const decriptionStyle = {
  marginTop: '15px',
  width: '100%',
};

const BucketContents = ({
  inputDescActionConnect,
  inputTitleActionConnect,
  titleValue,
  descriptionValue,
}) => {
  const [title, setTitle] = useState(titleValue);
  const [description, setDescription] = useState(descriptionValue);
  const changeTitle = (e) => {
    inputTitleActionConnect(e.target.value);
    setTitle(e.target.value);
  };
  const changeDesc = (e) => {
    inputDescActionConnect(e.target.value);
    setDescription(e.target.value);
  };

  return (
    <BucketContentsWrapper>
      <BucketInputText
        style={titleStyle}
        label="목표 Title 작성"
        changeInputText={changeTitle}
        value={title}
      />
      <BucketInputText
        style={decriptionStyle}
        label="목표 Description 작성"
        changeInputText={changeDesc}
        value={description}
      />
    </BucketContentsWrapper>
  );
};

export default connect(null, {
  inputDescActionConnect: inputDescAction,
  inputTitleActionConnect: inputTitleAction,
})(BucketContents);
