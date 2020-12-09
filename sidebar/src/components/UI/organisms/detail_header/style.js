import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 4,
    fontSize: '3rem',
    fontFamily: 'Nanum Brush Script, sans-serif !important',
    '&:hover': {
      cursor: 'default',
    },
  },
  description: {
    padding: '8px',
    fontSize: '1rem',
    '&:hover': {
      cursor: 'default',
    },
  },
  textField: {
    marginTop: '10px',
  },
  titleResize: {
    fontSize: '30px',
    color: '#555555',
  },
  descResize: {
    fontSize: '18px',
    color: '#555555',
  },
  achieveButton: {
    marginLeft: '10px',
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

export { useStyles, TitleWrapper };
