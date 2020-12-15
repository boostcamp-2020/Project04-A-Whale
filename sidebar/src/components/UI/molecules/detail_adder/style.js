import { makeStyles } from '@material-ui/core/styles';

export const root = {
  color: 'inherit',
  width: '100%',
  marginBottom: '10px',
};

export const cancleButton = {
  margin: '4px',
  padding: '8px',
  color: 'white',
  width: '100px',
  background: '#e85a71',
};

export const addButton = {
  margin: '4px',
  padding: '8px',
  color: 'white',
  width: '100px',
  background: '#454552',
};

export const BoldFont = { fontWeight: 'bold', fontSize: '16px' };

export const editButton = {
  background: '#4ea1d3',
  color: 'white',
  fontSize: '20px',
  width: '100%',
  height: '40px',
};

const useStyles = makeStyles(() => ({
  dueDate: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  detailInputWrapper: {
    display: 'flex',
  },
  detailInput: {
    marginRight: 20,
  },
}));

export default useStyles;
