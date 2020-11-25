import React, { useState } from 'react';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import InputText from '../atoms/InputText';
import StyledButton from '../atoms/StyledButton';
import { addDetailAction } from '../../../modules/actions/createbucket';

const DetailAdder = ({ addDetailActionConnect }) => {
  const style = {
    color: 'inherit',
    width: '100%',
  };

  const [state, setState] = useState('');

  const onChangeHandler = (e) => {
    setState(e.target.value);
  };

  const onClickHandler = () => {
    addDetailActionConnect(state);
  };

  return (
    <div>
      <InputText
        id="detailAddButton"
        style={style}
        variant="outlined"
        label="Detail 추가 등록"
        onChangeHandler={onChangeHandler}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <StyledButton
                type="Icon"
                variant="add detail"
                content={<AddCircleIcon />}
                onClickHandler={onClickHandler}
              />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({ details: state.createbucket.details });

export default connect(mapStateToProps, { addDetailActionConnect: addDetailAction })(DetailAdder);
