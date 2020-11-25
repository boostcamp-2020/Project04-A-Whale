import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InputText from '../atoms/InputText';
import StyledButton from '../atoms/StyledButton';

const DetailAdder = () => {
  const style = {
    color: 'inherit',
  };

  return (
    <InputText
      style={style}
      variant="outlined"
      label="Detail 추가 등록"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <StyledButton type="Icon" variant="add detail" content={<AddCircleIcon />} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DetailAdder;
