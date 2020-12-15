import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: (props) => ({
    position: 'absolute',
    top: `${props.posY + 35}px`,
    left: `${props.posX - 220}px`,
    background: '#454552',
    color: '#fff',
    padding: '13px',
    borderRadius: '5px',
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
  title: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    fontSize: 20,
  },
  desc: {
    marginBottom: 10,
  },
});

export default useStyles;
