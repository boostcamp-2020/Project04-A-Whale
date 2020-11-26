import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BucketInputText from '../../molecules/BucketInputText/BucketInputText';
import { inputDescAction, inputTitleAction } from '../../../../modules/actions/createbucket';

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
  rows: 4,
  rowsMax: 10,
};

const BucketContents = ({
  storeTitle,
  storeDescription,
  inputDescActionConnect,
  inputTitleActionConnect,
}) => {
  const changeTitle = (e) => {
    inputTitleActionConnect(e.target.value);
  };
  const changeDesc = (e) => {
    inputDescActionConnect(e.target.value);
  };

  return (
    <BucketContentsWrapper>
      <BucketInputText
        style={titleStyle}
        label="목표 Title 작성"
        changeInputText={changeTitle}
        value={storeTitle}
      />
      <BucketInputText
        style={decriptionStyle}
        label="목표 Description 작성"
        changeInputText={changeDesc}
        value={storeDescription}
      />
    </BucketContentsWrapper>
  );
};

const mapStateToProps = (state) => ({
  storeTitle: state.createbucket.title,
  storeDescription: state.createbucket.description,
});

export default connect(mapStateToProps, {
  inputDescActionConnect: inputDescAction,
  inputTitleActionConnect: inputTitleAction,
})(BucketContents);
