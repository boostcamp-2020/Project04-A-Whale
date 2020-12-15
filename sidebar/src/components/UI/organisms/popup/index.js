import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './style';

const PopUp = ({ dueDetails }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(true);
  // const [rows, setRows] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (bucketNo) => {
    history.push(`/detail/${bucketNo}`);
  };

  return (
    <div className={classes.root}>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">[오늘은 꼭] &nbsp; 지정된 알림</DialogTitle>
        <List>
          {dueDetails.map((dueDetail, index) => (
            <ListItem button onClick={() => handleListItemClick(dueDetail.bucket.no)} key={index}>
              <ListItemText
                primary={`${dueDetail.title}    in  ${dueDetail.bucket.title}`}
                secondary={`(${dueDetail.dueDate})`}
              />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
};

export default PopUp;
