import React, { useState } from 'react';
import StyledButton from '../../atoms/styled_button';

const FollowButton = ({ isFollow }) => {
  const [follow, setFollow] = useState(isFollow);
  const style = {
    margin: '15px',
    minWidth: '120px',
    minHeight: '30px',
    background: `${follow ? 'grey' : 'blue'}`,
    color: `${follow ? 'black' : 'white'}`,
    fontWeight: 'bold',
    width: '80%',
  };

  const clickFollowButton = () => {
    setFollow(!follow);
  };

  return (
    <StyledButton
      type="Text"
      style={style}
      variant="contained"
      content={follow ? '팔로우 취소' : '팔로우'}
      onClickHandler={clickFollowButton}
    />
  );
};

export default FollowButton;
