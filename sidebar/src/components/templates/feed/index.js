import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import useStyles from './style';
import FeedListItem from '../../UI/molecules/feed_list_item';

const feeds = [
  {
    name: '사용자1', // 이름 클릭하면 해당 사용자의 정보 페이지로 이동할 수 있도록.
    content: '목표1 포기',
    date: '2020-01-02 12:00',
  },
  {
    name: '사용자2',
    content: '세부 목표1 달성',
    date: '2020-01-01 12:00',
  },
  {
    name: '사용자3',
    content: '세부 목표1 생성',
    date: '2020-12-25 12:00',
  },
];

const Feed = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <List className={classes.list}>
        {feeds.map((feed) => (
          <>
            <FeedListItem feed={feed} />
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </div>
  );
};

export default Feed;
