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
    background: '#fafafa',
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
    width: 60,
    height: 60,
  },
  nickname: {
    fontSize: 20,
    marginLeft: 16,
  },
  rankText: {
    fontSize: 15,
    marginLeft: 16,
    marginTop: 2,
  },
  followerText: {
    marginLeft: 17,
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
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 13px;
  margin-left: 17px;
  border: 1px solid #aaa;
  padding: 10px;
  margin-right: 17px;
  border-radius: 5px;
`;

export { useStyles, UserInfoWrapper, FollowerWrapper, DescriptionWrapper };
