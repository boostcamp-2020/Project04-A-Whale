import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../../atoms/date_picker';
import StyledButton from '../../atoms/styled_button';
import { addDetailAction } from '../../../../modules/actions/createbucket';
import useStyle, { cancleButton, addButton, editButton } from './style';

const DetailAdder = ({ addDetailActionConnect }) => {
  const classes = useStyle();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const onChangeHandler = (e) => setTitle(e.target.value);
  const editHandler = () => setEdit(true);
  const dueDateHandler = (value) => setDueDate(value);
  const cancleEditHandler = () => setEdit(false);

  const detailAddHandler = () => {
    addDetailActionConnect({ title, dueDate });
    setEdit(false);
    setTitle('');
    setDueDate(new Date());
  };

  return (
    <>
      {edit ? (
        <>
          <div className={classes.detailInputWrapper}>
            <TextField
              className={classes.detailInput}
              margin="dense"
              variant="outlined"
              fullWidth
              required
              placeholder="세부 목표를 추가해주세요."
              value={title}
              onChange={onChangeHandler}
            />
            <DatePicker date={dueDate} handler={dueDateHandler} />
          </div>
          <div className={classes.buttons}>
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
          </div>
        </>
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
