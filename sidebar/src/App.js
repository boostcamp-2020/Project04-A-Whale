import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import theme from './theme';

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
