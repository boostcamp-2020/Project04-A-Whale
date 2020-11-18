import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const clickHandler = () => {
    whale.tabs.executeScript({
      code: 'const bodyText = document.querySelector("body").innerText;alert(bodyText);',
    });
  };
  return (
    <div className="App">
      <h1>올해는 꼭</h1>
      <button type="button" onClick={clickHandler}>
        버튼
      </button>
    </div>
  );
};

export default App;
