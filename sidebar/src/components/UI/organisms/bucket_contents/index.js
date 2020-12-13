import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { inputDescAction, inputTitleAction } from '../../../../modules/actions/createbucket';
import BucketDescription from '../../molecules/bucket_decription';
import BucketTitle from '../../molecules/bucket_title';
import { BucketContentsWrapper, titleStyle, decriptionStyle } from './style';

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
      <BucketTitle
        style={titleStyle}
        label="목표 Title 작성"
        onChangeHandler={changeTitle}
        value={storeTitle}
      />
      <BucketDescription
        style={decriptionStyle}
        label="목표 description 작성"
        value={storeDescription}
        onChangeHandler={changeDesc}
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
