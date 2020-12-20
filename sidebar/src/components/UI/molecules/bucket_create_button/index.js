import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StyledButton from '../../atoms/styled_button';
import { createBucket } from '../../../../lib/api';
import { resetBucketAction } from '../../../../modules/actions/createbucket';

const BucketCreateButton = () => {
  const history = useHistory();
  const style = {
    minWidth: '100%',
    minHeight: '40px',
    backgroundColor: '#454552',
    color: 'white',
    fontSize: 20,
  };
  const dispatch = useDispatch();
  const { storeTitle, storeDescription, storeDetails } = useSelector(({ createbucket }) => ({
    title: createbucket.title,
    descripion: createbucket.description,
    details: createbucket.details,
  }));
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (storeTitle.length * storeDetails.length !== 0) setDisabled(false);
    else setDisabled(true);
  }, [storeTitle, storeDetails]);

  const onClickHandler = async () => {
    await createBucket(storeTitle, storeDescription, storeDetails);
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
