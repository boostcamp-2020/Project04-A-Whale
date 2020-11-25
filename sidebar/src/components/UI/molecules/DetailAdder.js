import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InputText from '../atoms/InputText';
import StyledButton from '../atoms/StyledButton';

const DetailAdder = ({ callback }) => {
  const style = {
    color: 'inherit',
    witdh: '100%',
  };

  const [state, setState] = useState('');

  const onChangeHandler = (e) => {
    setState(e.target.value);
  };

  const onClickHandler = () => {
    callback(state);
  };

  return (
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
  );
};

export default DetailAdder;
