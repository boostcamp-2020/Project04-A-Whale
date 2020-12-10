import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import AchieveRate from '../../molecules/achieve_rate';
import { useStyles, UserInfoWrapper, DescriptionWrapper, FollowerWrapper } from './style';

const UserInfo = () => {
  const classes = useStyles();
  const { userInfo } = useSelector(({ userinfo }) => ({
    userInfo: userinfo.userInfo,
  }));
  const { no, nickname, description, rank, achieveRate, followerCount, followingCount } = userInfo;

  return (
    <List className={classes.list}>
      <ListItem key="사용자 정보">
        <Avatar className={classes.avatar} alt="profile-img" src="/empty-user.png" />
        <UserInfoWrapper>
          <span className={classes.nickname}>{nickname}</span>
          <span className={classes.rankText}>랭크: {rank}</span>
        </UserInfoWrapper>
      </ListItem>
      <FollowerWrapper>
        팔로워 수: {followerCount}명 | 팔로잉 수: {followingCount}명
      </FollowerWrapper>
      <AchieveRate achieveRate={achieveRate} />
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </List>
  );
};

export default UserInfo;
