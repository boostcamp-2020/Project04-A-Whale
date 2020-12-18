import { createMuiTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ThemeMode = styled.div`
  background-color: ${(props) => (props.darkMode ? '#111111' : '#eeeeee')};
  color: ${(props) => (props.darkMode ? '#eeeeee' : '#555555')};
  min-height: 100vh;
  height: 100%;
`;

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Bazzi', 'NanumSquareRound'].join(','),
    color: 'inherit',
  },
  palette: {
    primary: {
      main: '#454552',
    },
    secondary: {
      main: '#4ea1d3',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'inherit',
      },
    },
  },
});

export default theme;
