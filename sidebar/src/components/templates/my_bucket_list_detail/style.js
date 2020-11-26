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
  float: right;
  button: {
    margin-left: 10px;
  }
`;

const NewTodoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export { useStyles, TitleWrapper, ButtonWrapper, NewTodoWrapper };
