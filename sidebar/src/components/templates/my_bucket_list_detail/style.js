import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
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
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title: {
    flex: 4,
    '&:hover': {
      cursor: 'default',
    },
  },
  description: {
    padding: '8px',
    '&:hover': {
      cursor: 'default',
    },
  },
  textField: {
    padding: '8px',
  },
  titleResize: {
    fontSize: '30px',
    color: '#555555',
  },
  descResize: {
    fontSize: '20px',
    color: '#555555',
  },
  list: {
    width: '100%',
  },
  text: {
    paddingTop: theme.spacing(3),
  },
  achieveComment: {
    marginTop: theme.spacing(4),
  },
  labelRoot: {
    fontSize: '20px',
  },
}));

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  svg:hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  justify-content: flex-end;
`;

const DetailTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { useStyles, TitleWrapper, ButtonWrapper, DetailTextWrapper };
