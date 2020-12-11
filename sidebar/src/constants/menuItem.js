/* eslint-disable react/react-in-jsx-scope */
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const menuItems = [
  { title: '내 목표', icon: <ListAltIcon />, path: '/' },
  { title: '팔로우', icon: <PeopleIcon />, path: '/follow' },
  { title: '피드', icon: <FeedbackIcon />, path: '/feed' },
  { title: '설정', icon: <SettingsIcon />, path: '/achieves/2/create' },
  { title: '로그아웃', icon: <ExitToAppIcon />, path: '/achieves/2/result' },
];

export default menuItems;
