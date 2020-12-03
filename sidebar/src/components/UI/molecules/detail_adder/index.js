import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import InputText from '../../atoms/input_text';
import StyledButton from '../../atoms/styled_button';
import { addDetailAction } from '../../../../modules/actions/createbucket';

const DetailAdder = ({ addDetailActionConnect }) => {
  const style = {
    color: 'inherit',
    width: '100%',
    marginBottom: '10px',
  };

  const [state, setState] = useState('');

  const onChangeHandler = (e) => {
    setState(e.target.value);
  };

  const onClickHandler = () => {
    if (state.length > 0) addDetailActionConnect(state);
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
