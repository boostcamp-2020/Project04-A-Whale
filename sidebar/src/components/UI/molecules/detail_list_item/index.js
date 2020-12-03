import React from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import { deleteDetail } from '../../../../modules/details';
import DetailTextWrapper from './style';

const DetailListItem = ({ detail, handleToggle, checked }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteDetail({ no: detail.no }));
  };

  return (
    <ListItem role={undefined} dense button onClick={handleToggle(detail)}>
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
        <IconButton edge="end" aria-label="remove" onClick={handleRemove}>
          <RemoveIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default DetailListItem;
