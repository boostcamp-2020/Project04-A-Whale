import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { createDetail } from '../../../../modules/details';
import { useStyles, NewTodoWrapper } from './style';

const DetailRegister = ({ bucket }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSave = () => {
    dispatch(createDetail({ bucketNo: bucket.no, title, dueDate: selectedDate }));
    setTitle('');
    setSelectedDate(new Date());
  };

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <NewTodoWrapper>
      <TextField
        id="outlined-basic"
        margin="dense"
        variant="outlined"
        fullWidth
        placeholder="세부 목표를 추가해주세요."
        value={title}
        onChange={handleChange}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={classes.datePicker}
          disableToolbar
          variant="inline"
          format="yyyy-MM-dd"
          margin="normal"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <IconButton edge="end" aria-label="add" onClick={handleSave}>
        <AddCircleIcon fontSize="large" />
      </IconButton>
    </NewTodoWrapper>
  );
};

export default DetailRegister;
