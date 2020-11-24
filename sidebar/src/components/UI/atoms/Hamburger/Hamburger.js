import React from 'react';
import styled from 'styled-components';
import css from './Hamburger.css';

const Hamburger = () => {
  const hamClickHandler = (e) => {
    const hamburger = e.target.closest('.hamburger');
    hamburger.classList.toggle('is-active');
  };
  return (
    <Button type="button" onClick={hamClickHandler}>
      <div className="hamburger hamburger--elastic">
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </div>
    </Button>
  );
};

const Button = styled.button`
  all: unset;
`;

export default Hamburger;
