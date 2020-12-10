import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: (props) => ({
    position: 'absolute',
    top: `${props.posY - 90}px`,
    left: `${props.posX - 320}px`,
    background: '#5677f4',
    color: 'white',
    padding: '13px',
    borderRadius: '20rem',
    display: props.isVisible,
    '&:after': {
      borderTop: '0px solid transparent',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid pink',
      content: '',
      position: 'absolute',
      top: '-10px',
      left: '200px',
    },
  }),
  top: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  middle: {
    fontSize: 14,
  },
  low: {
    marginBottom: 12,
  },
});

export default useStyles;
