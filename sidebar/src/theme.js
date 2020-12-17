import { createMuiTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ThemeMode = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  height: 100%;
  filter: ${(props) =>
    props.darkMode ? 'invert(1) hue-rotate(180deg)' : 'invert(0) hue-rotate(0deg)'};
`;

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Bazzi', 'NanumSquareRound'].join(','),
  },
  palette: {
    primary: {
      main: '#454552',
    },
    secondary: {
      main: '#4ea1d3',
    },
  },
});

export default theme;
