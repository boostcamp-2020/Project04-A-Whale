import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';

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

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
