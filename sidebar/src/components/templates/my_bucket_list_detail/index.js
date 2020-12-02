import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { updateDetailStatus } from '../../../modules/details';
import DetailHeader from '../../UI/organisms/detail_header';
import DetailRegister from '../../UI/organisms/detail_register';
import { useStyles, DetailTextWrapper } from './style';

const MyBucketListDetail = ({ bucket, details }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { openDetails, achieveDetails, achieveComment } = details;
  const [checked, setChecked] = useState([...achieveDetails]);

  const statusChange = (detail) => {
    const params = {};
    params.no = detail.no;
    if (detail.status === 'A') params.status = 'O';
    if (detail.status === 'O') params.status = 'A';
    dispatch(updateDetailStatus(params));
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    statusChange(value);
  };

  return (
    <main className={classes.root}>
      <div className={classes.header} />
      <DetailHeader bucket={bucket} />

      {/* 달성 소감 */}
      {achieveComment ? (
        <TextField
          id="outlined-read-only-input"
          label="달성 소감🎉"
          defaultValue={achieveComment}
          className={classes.achieveComment}
          InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
            },
          }}
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
        />
      ) : (
        <DetailRegister />
      )}

      <Typography className={classes.text}>진행 중인 상세 목표</Typography>
      <Divider />
      <List className={classes.list}>
        {openDetails.map((detail) => {
          return (
            <ListItem key={detail.no} role={undefined} dense button onClick={handleToggle(detail)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  color="default"
                  tabIndex={-1}
                  checked={checked.indexOf(detail) !== -1}
                  disableRipple
                  value={JSON.stringify(detail)}
                />
              </ListItemIcon>
              <DetailTextWrapper>
                <ListItemText primary={<Typography type="body2">{detail.title}</Typography>} />
                <ListItemText secondary={detail.dueDate} />
              </DetailTextWrapper>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="remove">
                  <RemoveIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>

      <Typography className={classes.text}>달성된 상세 목표</Typography>
      <Divider />
      <List className={classes.list}>
        {achieveDetails.map((detail) => {
          return (
            <ListItem key={detail.no} role={undefined} dense button onClick={handleToggle(detail)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  color="default"
                  tabIndex={-1}
                  checked={checked.indexOf(detail) !== -1}
                  disableRipple
                  value={JSON.stringify(detail)}
                />
              </ListItemIcon>
              <DetailTextWrapper>
                <ListItemText primary={<Typography type="body2">{detail.title}</Typography>} />
                <ListItemText secondary={detail.dueDate} />
              </DetailTextWrapper>
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
