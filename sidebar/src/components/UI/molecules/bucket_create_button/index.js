import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledButton from '../../atoms/styled_button';
import { createBucket } from '../../../../lib/api';
import { resetBucketAction } from '../../../../modules/actions/createbucket';

const BucketCreateButton = ({
  storeTitle,
  storeDescription,
  storeDetails,
  resetBucketActionConnect,
}) => {
  const history = useHistory();
  const style = {
    minWidth: '100%',
    minHeight: '40px',
    backgroundColor: '#454552',
    color: 'white',
    fontSize: 20,
  };
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (storeTitle.length * storeDetails.length !== 0) setDisabled(false);
    else setDisabled(true);
  }, [storeTitle, storeDetails]);

  const onClickHandler = async () => {
    await createBucket(storeTitle, storeDescription, storeDetails);
    resetBucketActionConnect();
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

const mapStateToProps = (state) => ({
  storeTitle: state.createbucket.title,
  storeDescription: state.createbucket.description,
  storeDetails: state.createbucket.details,
});

export default connect(mapStateToProps, {
  resetBucketActionConnect: resetBucketAction,
})(BucketCreateButton);
