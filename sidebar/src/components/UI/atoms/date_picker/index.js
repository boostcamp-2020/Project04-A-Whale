import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  date: {
    textAlignLast: 'right',
    width: 195,
  },
}));

const DatePicker = ({ date, handler }) => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        className={classes.date}
        variant="inline"
        format="yyyy-MM-dd"
        margin="normal"
        value={date}
        onChange={handler}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
