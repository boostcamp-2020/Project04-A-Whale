import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StyledButton from '../../atoms/styled_button';
import { createBucket } from '../../../../lib/api';
import { resetBucketAction } from '../../../../modules/actions/createbucket';
import style from './style';

const BucketCreateButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { title, description, details } = useSelector(({ createbucket }) => {
    return createbucket;
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (title.length * details.length !== 0) setDisabled(false);
    else setDisabled(true);
  }, [title, details]);

  const onClickHandler = async () => {
    await createBucket(title, description, details);
    dispatch(resetBucketAction);
    history.replace('/');
  };

  return (
    <StyledButton
      type="Text"
      style={style}
      variant="contained"
      content="생성"
      onClickHandler={onClickHandler}
      disabled={disabled}
    />
  );
};

export default BucketCreateButton;
