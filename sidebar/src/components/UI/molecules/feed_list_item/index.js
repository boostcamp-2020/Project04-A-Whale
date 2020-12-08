/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './style';

const FeedListItem = ({ feed }) => {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="profile-img" src="/empty-user.png" />
      </ListItemAvatar>
      <ListItemText
        primary={feed.name}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {feed.content}
            </Typography>
            {` - ${feed.date}`}
          </>
        }
      />
    </ListItem>
  );
};

export default FeedListItem;
