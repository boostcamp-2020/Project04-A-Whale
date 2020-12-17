import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { deleteFollowing, setFollowing } from '../../../../lib/api';
import StyledButton from '../../atoms/styled_button';

const FollowButton = ({ userNo }) => {
  const { isFollow } = useSelector(({ userInfo }) => ({
    isFollow: userInfo.isFollowing,
  }));

  const [follow, setFollow] = useState(isFollow);
  const style = {
    minHeight: '30px',
    background: `${follow ? '#454552' : '#4ea1d3'}`,
    color: 'white',
    width: '100%',
  };

  const clickFollowButton = () => {
    if (follow === false) setFollowing(userNo);
    else deleteFollowing(userNo);
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
