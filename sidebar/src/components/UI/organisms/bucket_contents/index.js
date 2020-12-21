import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputDescAction, inputTitleAction } from '../../../../modules/createbucket';
import BucketDescription from '../../molecules/bucket_decription';
import BucketTitle from '../../molecules/bucket_title';
import { BucketContentsWrapper, titleStyle, decriptionStyle } from './style';

const BucketContents = () => {
  const dispatch = useDispatch();
  const { title, description, details } = useSelector(({ createbucket }) => createbucket);
  const changeTitle = (e) => {
    dispatch(inputTitleAction(e.target.value));
  };
  const changeDesc = (e) => {
    dispatch(inputDescAction(e.target.value));
  };

  return (
    <BucketContentsWrapper>
      <BucketTitle
        style={titleStyle}
        label="목표 Title 작성"
        onChangeHandler={changeTitle}
        value={title}
      />
      <BucketDescription
        style={decriptionStyle}
        label="목표 description 작성"
        value={description}
        onChangeHandler={changeDesc}
      />
    </BucketContentsWrapper>
  );
};

export default BucketContents;
