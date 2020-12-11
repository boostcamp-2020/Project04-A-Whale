import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  UserItem: {
    padding: '12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '8px',
  },
}));

export const nicknameStyle = {
  marginLeft: '14px',
  fontSize: '18px',
  fontWeight: 'bolder',
  display: 'inline-block',
};

export const descriptionStyle = {
  marginLeft: '14px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#444444',
  display: 'inline-block',
};

export const box = {
  width: '45px',
  height: '45px',
  borderRadius: '70%',
  overflow: 'hidden',
};

export const profile = {
  width: '100%',
  heigth: '100%',
  objectFit: 'cover',
};

export default useStyle;
