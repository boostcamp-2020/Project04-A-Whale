import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledButton from '../../atoms/styled_button/StyledButton';
import { createBucket } from '../../../../lib/api';

const BucketCreateButton = ({ storeTitle, storeDescription, storeDetails }) => {
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
  console.log('disabled:', disabled);

  const onClickHandler = async () => {
    const res = await createBucket(storeTitle, storeDescription, storeDetails);
    history.push({ pathname: '/' });
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

export default connect(mapStateToProps, null)(BucketCreateButton);
