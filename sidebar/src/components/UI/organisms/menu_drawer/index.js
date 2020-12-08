import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AchieveRate from '../../molecules/achieve_rate';
import { useStyles, UserInfoWrapper, FollowerWrapper, DescriptionWrapper } from './style';

const menuItems = [
  { title: '내 목표', icon: <ListAltIcon />, path: '/' },
  { title: '팔로우', icon: <PeopleIcon />, path: '/follow' },
  { title: '피드', icon: <FeedbackIcon />, path: '/feed' },
  { title: '설정', icon: <SettingsIcon />, path: '/achieves/2/create' },
  { title: '로그아웃', icon: <ExitToAppIcon />, path: '/achieves/2/result' },
];

const user = {
  id: 'test',
  nickname: '사용자',
  description: '사용자 상세',
  rank: '사용자',
  achieveRate: 50,
  followerCount: 5,
  followingCount: 3,
};

const MenuDrawer = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div role="presentation" onClick={() => toggleDrawer(false)}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list}>
          <ListItem key="사용자 정보">
            <Avatar className={classes.avatar} alt="profile-img" src="/empty-user.png" />
            <UserInfoWrapper>
              <span className={classes.nickname}>{user.nickname}</span>
              <span className={classes.rankText}>랭크: {user.rank}</span>
            </UserInfoWrapper>
          </ListItem>
          <FollowerWrapper>
            팔로워 수: {user.followerCount}명 | 팔로잉 수: {user.followingCount}명
          </FollowerWrapper>
          <AchieveRate achieveRate={user.achieveRate} />
          <DescriptionWrapper>{user.description}</DescriptionWrapper>
        </List>
        <Divider />
        <List className={classes.menuList}>
          {menuItems.map((item, index) => (
            <Link to={item.path} style={{ textDecoration: 'none' }} key={index}>
              <ListItem button key={index}>
                <ListItemIcon className={classes.listIcon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} style={{ color: '#000000' }} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
