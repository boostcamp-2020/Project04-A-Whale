import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../UI/organisms/header';
import { getUserInfo, getIsFollowing, getUserBuckets, resetUserInfo } from '../../modules/userInfo';
import Spinner from '../UI/atoms/spinner';
import UserInfoTemplate from '../templates/user_info_template';

const UserInfoPage = ({ match }) => {
  const { userNo } = match.params;
  const dispatch = useDispatch();
  const { userInfo, buckets, loadingBuckets, loadingUserInfo, loadingIsFollowing } = useSelector(
    ({ userInfo, loading }) => ({
      userInfo: userInfo.userInfo,
      buckets: userInfo.buckets,
      loadingBuckets: loading['userInfo/GET_USERBUCKETS'],
      loadingUserInfo: loading['userInfo/GET_USERINFO'],
      loadingIsFollowing: loading['userInfo/GET_ISFOLLOWING'],
    })
  );

  useEffect(() => {
    dispatch(getUserInfo(userNo));
    dispatch(getIsFollowing({ followed: userNo }));
    dispatch(getUserBuckets(userNo));
    return () => dispatch(resetUserInfo());
  }, [dispatch]);

  return (
    <>
      {!loadingUserInfo && userInfo && <Header title={userInfo.nickname} isGoBack />}
      {loadingBuckets && loadingIsFollowing && loadingUserInfo && <Spinner />}
      {!loadingBuckets && !loadingUserInfo && !loadingIsFollowing && buckets && (
        <UserInfoTemplate userInfo={userInfo} userNo={userNo} buckets={buckets} />
      )}
    </>
  );
};

export default UserInfoPage;
