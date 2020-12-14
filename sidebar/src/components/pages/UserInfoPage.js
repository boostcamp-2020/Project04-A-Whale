import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../UI/organisms/header';
import { getUserInfo, getIsFollowing, getUserBuckets } from '../../modules/userInfo';
import Spinner from '../UI/atoms/spinner';
import UserInfoTemplate from '../templates/user_info_template';

const UserInfoPage = ({ match }) => {
  const { userNo } = match.params;
  const dispatch = useDispatch();
  const { userInfo, buckets, loadingBuckets } = useSelector(({ userInfo, loading }) => ({
    userInfo: userInfo.userInfo,
    buckets: userInfo.buckets,
    loadingBuckets: loading['userInfo/GET_USERBUCKETS'],
  }));

  useEffect(() => {
    dispatch(getUserInfo(userNo));
    dispatch(getIsFollowing({ following: 1, followed: userNo }));
    dispatch(getUserBuckets(userNo));
  }, [dispatch]);

  return (
    <>
      {userInfo && <Header title={userInfo.nickname} isGoBack />}
      {loadingBuckets && <Spinner />}
      {!loadingBuckets && buckets && (
        <UserInfoTemplate userInfo={userInfo} userNo={userNo} buckets={buckets} />
      )}
    </>
  );
};

export default UserInfoPage;
