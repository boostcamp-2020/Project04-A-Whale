import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  list: {
    background: '#fdfdfd',
    paddingLeft: 10,
    paddingRight: 10,
  },
  menuList: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  listIcon: {
    minWidth: 45,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  nickname: {
    fontSize: 24,
    marginLeft: 16,
  },
  rankText: {
    fontSize: 15,
    marginLeft: 16,
    marginTop: 2,
  },
  menuText: {
    color: '#000',
    fontSize: 20,
  },
}));

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FollowerWrapper = styled.div`
  margin-left: 17px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 13px;
  margin-left: 17px;
  border: 1px solid #aaa;
  padding: 10px;
  margin-right: 17px;
  border-radius: 5px;
  font-size: 18px;
`;

export { useStyles, UserInfoWrapper, FollowerWrapper, DescriptionWrapper };
