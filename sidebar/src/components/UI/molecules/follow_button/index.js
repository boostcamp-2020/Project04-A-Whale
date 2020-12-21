import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFollowing, setFollowing } from '../../../../lib/api';
import { isFollowChange } from '../../../../modules/userInfo';
import StyledButton from '../../atoms/styled_button';

const FollowButton = ({ userNo }) => {
  const dispatch = useDispatch();
  const { isFollow } = useSelector(({ userInfo }) => ({
    isFollow: userInfo.isFollowing,
  }));

  const style = {
    minHeight: '30px',
    background: `${isFollow ? '#454552' : '#4ea1d3'}`,
    color: 'white',
    width: '100%',
  };

  const clickFollowButton = () => {
    if (isFollow === false) setFollowing(userNo);
    else deleteFollowing(userNo);
    dispatch(isFollowChange());
  };

  return (
    <StyledButton
      type="Text"
      style={style}
      variant="contained"
      content={isFollow ? '팔로우 취소' : '팔로우'}
      onClickHandler={clickFollowButton}
    />
  );
};

export default FollowButton;
