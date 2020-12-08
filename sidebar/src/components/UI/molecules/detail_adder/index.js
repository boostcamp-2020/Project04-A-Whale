import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Span from '../../atoms/span';
import InputText from '../../atoms/input_text';
import StyledButton from '../../atoms/styled_button';
import { addDetailAction } from '../../../../modules/actions/createbucket';
import useStyle, { root, DatePicker, cancleButton, addButton, editButton } from './style';

const DetailAdder = ({ addDetailActionConnect }) => {
  const classes = useStyle();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const editHandler = () => {
    setEdit(true);
  };
  const dueDateHandler = (e) => {
    setDueDate(e.target.value);
  };
  const cancleEditHandler = () => {
    setEdit(false);
  };

  const detailAddHandler = () => {
    addDetailActionConnect({ title, dueDate });
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputText
              id="detailAddButton"
              style={root}
              variant="outlined"
              label="새로운 세부목표를 입력해주세요"
              onChangeHandler={onChangeHandler}
            />
          </Grid>
          <Grid item xs={6} className={classes.dueDate}>
            <Span style={{ fontWeight: 'bold', fontSize: '16px' }} content="기한" />
            <InputText
              style={DatePicker}
              type="date"
              onChangeHandler={dueDateHandler}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6} className={classes.buttons}>
            <StyledButton
              variant="contained"
              onClickHandler={detailAddHandler}
              style={addButton}
              content="추가"
              disabled={title.length < 1}
            />
            <StyledButton
              variant="contained"
              onClickHandler={cancleEditHandler}
              style={cancleButton}
              content="취소"
            />
          </Grid>
        </Grid>
      ) : (
        <StyledButton
          content="버튼을 눌러 새로운 세부 목표를 설정하세요!"
          variant="contained"
          style={editButton}
          onClickHandler={editHandler}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({ details: state.createbucket.details });

export default connect(mapStateToProps, { addDetailActionConnect: addDetailAction })(DetailAdder);
