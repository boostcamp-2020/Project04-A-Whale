import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import RemoveIcon from '@material-ui/icons/Remove';
import CancelSaveButton from '../cancle_save_button';
import ConfirmDialog from '../confirm_dialog';
import { deleteDetail, updateDetailInfo } from '../../../../modules/details';
import getFormatData from '../../../../lib/date';
import { useStyles, DetailTextWrapper, InputWrapper } from './style';

const DetailListItem = ({ detail, handleToggle, checked, isAchieve }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(detail.dueDate);
  const [title, setTitle] = useState(detail.title);
  const [prevTitle, setPrevTitle] = useState('');
  const [prevSelectedDate, setPrevSelectedDate] = useState('');
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteDetail({ no: detail.no }));

  const handleModify = (e) => {
    e.stopPropagation(); // 이벤트 버블링 제거
    setPrevTitle(title);
    setPrevSelectedDate(selectedDate);
    setEdit(true);
  };

  const handleDateChange = (date) => setSelectedDate(date);
  const handleChange = ({ target }) => setTitle(target.value);

  const handleCancel = () => {
    setTitle(prevTitle);
    setSelectedDate(prevSelectedDate);
    setEdit(false);
  };

  const handleSave = () => {
    dispatch(updateDetailInfo({ no: detail.no, title, dueDate: selectedDate }));
    setSelectedDate(getFormatData(selectedDate));
    setEdit(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {edit ? (
        <>
          <InputWrapper>
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
                format="yyyy-MM-dd"
                margin="normal"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </InputWrapper>
          <CancelSaveButton handleCancel={handleCancel} handleSave={handleSave} />
        </>
      ) : (
        <ListItem role={undefined} dense button onClick={handleToggle(detail)}>
          {isAchieve ? null : (
            <ListItemIcon>
              <Checkbox
                edge="start"
                color="default"
                tabIndex={-1}
                checked={checked.indexOf(detail) !== -1}
                disableRipple
                // todo: 수정 요망
                value={JSON.stringify(detail)}
              />
            </ListItemIcon>
          )}
          <DetailTextWrapper>
            <ListItemText primary={<Typography type="body2">{title}</Typography>} />
            <ListItemText secondary={selectedDate} />
          </DetailTextWrapper>
          {isAchieve ? null : (
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="modify" onClick={handleModify}>
                <CreateIcon />
              </IconButton>
              <IconButton edge="end" aria-label="remove" onClick={handleOpen}>
                <RemoveIcon />
              </IconButton>
            </ListItemSecondaryAction>
          )}
        </ListItem>
      )}
      <ConfirmDialog
        open={open}
        handleClose={handleClose}
        handleClick={handleRemove}
        text="정말 삭제하시겠습니까?"
      />
    </>
  );
};

export default DetailListItem;
