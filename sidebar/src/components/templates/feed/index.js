import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import useStyles from './style';
import RefreshButton from '../../UI/atoms/refresh_button';
import FeedListItem from '../../UI/molecules/feed_list_item';

const Feed = ({ feeds, handleRefresh }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <List className={classes.list}>
        {feeds.map((feed, i) => (
          <div key={i}>
            <FeedListItem feed={feed} />
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
      <RefreshButton handleRefresh={handleRefresh} />
    </div>
  );
};

export default Feed;
