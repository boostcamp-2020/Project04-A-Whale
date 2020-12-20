import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const BucketCreateTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

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
}));

export default useStyles;