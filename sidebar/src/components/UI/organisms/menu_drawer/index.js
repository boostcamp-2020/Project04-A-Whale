import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import menuItems from '../../../../constants/menuItem';
import { getUser } from '../../../../modules/user';
import AchieveRate from '../../molecules/achieve_rate';
import { useStyles, UserInfoWrapper, FollowerWrapper, DescriptionWrapper } from './style';

const MenuDrawer = ({ open, toggleDrawer }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {user && (
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
      )}
    </>
  );
};

export default MenuDrawer;
