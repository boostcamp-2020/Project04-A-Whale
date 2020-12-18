import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import theme, { ThemeMode } from './theme';
import { getWhaleLocalStorage } from './lib/whaleLocalStorage';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const onChangeStorage = () => {
    try {
      whale.storage.onChanged.addListener((changes, areaName) => {
        if (areaName === 'local' && changes.sw) {
          console.log(changes.sw);
          const { newValue } = changes.sw;
          if (newValue && newValue.darkMode) {
            setDarkMode(true);
            console.log('true');
          } else {
            setDarkMode(false);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onChangeStorage();
    try {
      const keys = ['sw'];
      const callback = (items) => {
        if (items.sw && items.sw.darkMode) {
          setDarkMode(true);
        }
      };
      getWhaleLocalStorage(keys, callback);
    } catch (error) {
      console.log('웨일 확장앱이 아닙니다. 모드를 설정하지 않습니다.');
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <ThemeMode darkMode={darkMode}> */}
        <Router>
          <Routes />
        </Router>
        {/* </ThemeMode> */}
      </ThemeProvider>
    </>
  );
};

export default App;
