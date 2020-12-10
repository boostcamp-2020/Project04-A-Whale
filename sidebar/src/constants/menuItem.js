/* eslint-disable react/react-in-jsx-scope */
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import pathURI from './path';

const menuItems = [
  { title: '내 목표', icon: <ListAltIcon />, path: pathURI.myBucketList },
  { title: '팔로우', icon: <PeopleIcon />, path: pathURI.follow },
  { title: '피드', icon: <FeedbackIcon />, path: pathURI.feed },
  { title: '설정', icon: <SettingsIcon />, path: pathURI.setting },
  { title: '로그아웃', icon: <ExitToAppIcon />, path: pathURI.logout },
];

export default menuItems;
