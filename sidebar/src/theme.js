import { createMuiTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ThemeMode = styled.div`
  min-height: 100vh;
  height: 100%;
  ${(props) =>
    props.darkMode
      ? `
      background-color:#111111;
      color: #eeeeee;
      & p {
        color: #eeeeee !important;
      }
      & div {
        color: #eeeeee !important;
      }
      & input {
        color: #eeeeee !important;
        background-color: #333333 !important;
      }
      & button {
        // color: #eeeeee !important;
        // border: 1px solid rgba(128, 128, 128, 0.5) !important;
      }
      & span {
        color: #eeeeee !important;
      }
      & h4 {
        color: #eeeeee !important;
      }
      & h5 {
        color: #eeeeee !important;
      }
      `
      : ''}
  }};
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
