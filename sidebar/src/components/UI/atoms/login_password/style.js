import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
}));
