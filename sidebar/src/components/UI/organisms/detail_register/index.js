import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        value={title}
        onChange={handleChange}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={classes.datePicker}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <Button className={classes.addButton} variant="contained" onClick={handleSave}>
        등록
      </Button>
    </NewTodoWrapper>
  );
};

export default DetailRegister;
