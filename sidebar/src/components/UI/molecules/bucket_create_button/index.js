import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledButton from '../../atoms/styled_button/StyledButton';
import { createBucket } from '../../../../lib/api';
import {
  resetBucketAction
} from '../../../../modules/actions/createbucket';

const BucketCreateButton = ({ storeTitle, storeDescription, storeDetails, resetBucketActionConnect }) => {
  const history = useHistory();
  const style = {
    margin: '15px',
    minWidth: '120px',
    minHeight: '30px',
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bold',
  };

  const disabled = storeTitle.length * storeDetails.length === 0;

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
      content="추가"
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
