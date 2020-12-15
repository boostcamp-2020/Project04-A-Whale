import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import AchieveRate from '../../molecules/achieve_rate';
import { useStyles, UserInfoWrapper, DescriptionWrapper, FollowerWrapper } from './style';

const UserInfo = ({ userInfo }) => {
  const classes = useStyles();
  const { nickname, description, achieveRate, followerCount, followingCount } = userInfo;

  return (
    <List className={classes.list}>
      <ListItem className={classes.infoAvatar} key="사용자 정보">
        <Avatar className={classes.avatar} alt="profile-img" src="/empty-user.png" />
        <UserInfoWrapper>
          <span className={classes.nickname}>{nickname}</span>
        </UserInfoWrapper>
      </ListItem>
      <FollowerWrapper>
        팔로워 수: {followerCount}명 | 팔로잉 수: {followingCount}명
      </FollowerWrapper>
      <AchieveRate achieveRate={achieveRate} padding="0px" />
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </List>
  );
};

export default UserInfo;
