import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: '#555555',
  },
  input: {
    display: 'block',
    margin: '10px 0',
    width: '100%',
    '& div': {
      width: '100%',
    },
    '& input': {
      width: '100%',
    },
  },
  outlineButton: {
    width: 'calc(50% - 10px)',
    padding: '10px 0',
    margin: '5px',
  },
  link: {
    all: 'unset',
  },
}));

export const LoginLayout = styled.div`
  width: 100%;
  position: relative;
  top: 46%;
`;

export const LoginContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  min-width: fit-content;
  height: fit-content;
`;

export const LoginBox = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #b6b6b6;
  box-shadow: 0 0 3px #9c9c9c;
`;

export const LoginWrapper = styled.div``;
