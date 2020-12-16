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
  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (bucketNo) => {
    history.push(`/detail/${bucketNo}`);
  };

  return (
    <div className={classes.root}>
      <Dialog
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="popup-dialog-title"
        open={open}
      >
        <DialogTitle id="popup-dialog-title">[오늘은 꼭] &nbsp; 지정된 알림</DialogTitle>
        <List>
          {dueDetails.length > 0 ? (
            dueDetails.map((dueDetail, index) => (
              <ListItem button onClick={() => handleListItemClick(dueDetail.bucket.no)} key={index}>
                <ListItemText
                  primary={`${dueDetail.title}    in  ${dueDetail.bucket.title}`}
                  secondary={`(${dueDetail.dueDate})`}
                />
              </ListItem>
            ))
          ) : (
            <ListItem button key={0}>
              <ListItemText
                primary="설정된 기간 중에 스케줄이 없습니다."
                secondary="여유를 즐겨보세요."
              />
            </ListItem>
          )}
        </List>
      </Dialog>
    </div>
  );
};

export default PopUp;
