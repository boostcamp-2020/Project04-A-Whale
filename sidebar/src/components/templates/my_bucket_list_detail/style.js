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
  text: {
    paddingTop: theme.spacing(3),
    fontSize: 20,
    fontWeight: 'bold',
  },
  achieve: {
    '&>div': {
      padding: 10,
    },
  },
  achieveCommentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}));

const AchieveWrapper = styled.div`
  display: flex;
  padding-top: 24px;
  justify-content: space-between;
`;

export { useStyles, AchieveWrapper };
