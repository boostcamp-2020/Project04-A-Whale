/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router-dom';
import useStyles from './style';

const FeedListItem = ({ feed }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/follow/${feed.userNo}`);
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="profile-img" src="/empty-user.png" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <span className={classes.nickname} onClick={handleClick} role="presentation">
              {feed.nickname}
            </span>
            님이 {feed.content}
          </>
        }
        secondary={feed.date}
      />
    </ListItem>
  );
};

export default FeedListItem;
