import React from 'react';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles, NewTodoWrapper } from './style';

const DetailRegister = () => {
  const classes = useStyles();

  return (
    <NewTodoWrapper>
      <TextField id="outlined-basic" margin="dense" variant="outlined" fullWidth />
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
        </MuiPickersUtilsProvider> */}
      <Button className={classes.addButton} variant="contained">
        등록
      </Button>
    </NewTodoWrapper>
  );
};

export default DetailRegister;
