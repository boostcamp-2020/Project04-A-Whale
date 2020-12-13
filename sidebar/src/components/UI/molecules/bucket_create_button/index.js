import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledButton from '../../atoms/styled_button';
import { createBucket } from '../../../../lib/api';
import { resetBucketAction } from '../../../../modules/actions/createbucket';
import style from './style';

const BucketCreateButton = ({
  storeTitle,
  storeDescription,
  storeDetails,
  resetBucketActionConnect,
}) => {
  const history = useHistory();
  

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
