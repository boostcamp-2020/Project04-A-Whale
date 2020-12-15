import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  list: {
    background: '#fafafa',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  nickname: {
    fontSize: 25,
    marginLeft: 16,
  },
  infoAvatar: {
    padding: 0,
    paddingBottom: 10,
  },
}));

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FollowerWrapper = styled.div`
  padding: 10px 0px 10px 0px;
  font-size: 20px;
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 13px;
  border: 1px solid #aaa;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
`;

export { useStyles, UserInfoWrapper, FollowerWrapper, DescriptionWrapper };
