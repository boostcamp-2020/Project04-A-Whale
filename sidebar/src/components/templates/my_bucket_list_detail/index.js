// import 'date-fns';
import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BlockIcon from '@material-ui/icons/Block';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
// import DateFnsUtils from '@date-io/date-fns';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useStyles, TitleWrapper, ButtonWrapper, NewTodoWrapper } from './style';

const MyBucketListDetail = ({ bucket }) => {
  const classes = useStyles();
  const [title, setTitle] = useState(bucket.title);
  const [desc, setDesc] = useState(bucket.description);
  const [edit, setEdit] = useState(false);
  const [checked, setChecked] = useState([0]);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handlerClick = () => {
    setEdit(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      {edit ? (
        <>
          <TextField
            className={classes.textField}
            value={title}
            placeholder="title"
            fullWidth
            InputProps={{
              classes: {
                input: classes.titleResize,
              },
            }}
            onChange={handleTitleChange}
          />
          <TextField
            className={classes.textField}
            value={desc}
            placeholder="Description"
            fullWidth
            multiline
            InputProps={{
              classes: {
                input: classes.descResize,
              },
            }}
            onChange={handleDescChange}
          />
          <ButtonWrapper>
            <Button
              style={{ marginRight: '10px' }}
              variant="contained"
              color="secondary"
              startIcon={<BlockIcon />}
            >
              취소
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
              저장
            </Button>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <TitleWrapper>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
            <CreateIcon onClick={handlerClick} />
          </TitleWrapper>
          <Typography className={classes.description} variant="h5">
            {desc}
          </Typography>
        </>
      )}
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
      <List className={classes.list}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  color="default"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="remove">
                  <RemoveIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </main>
  );
};

export default MyBucketListDetail;
