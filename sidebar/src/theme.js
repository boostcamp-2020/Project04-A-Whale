import { createMuiTheme } from '@material-ui/core/styles';

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
