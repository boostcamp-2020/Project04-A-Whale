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
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './style';

const menuItems = [
  { title: '내 목표', icon: <ListAltIcon />, path: '/' },
  { title: '팔로우', icon: <PeopleIcon />, path: '/follow' },
  { title: '통계', icon: <EqualizerIcon />, path: '/statistics' },
  { title: '피드', icon: <FeedbackIcon />, path: '/feed' },
  { title: '설정', icon: <SettingsIcon />, path: '/achieve/1/create' },
  { title: '로그아웃', icon: <ExitToAppIcon />, path: '/achieve/1/result' },
];

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
          <ListItem button key="사용자 정보">
            <Avatar className={classes.orange}>H</Avatar>
            <ListItemText primary="사용자 정보" />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list}>
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
