/* eslint-disable */
import React, {useEffect} from 'react';
import Header from '../UI/organisms/header';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, getIsFollowing, getUserBuckets } from '../../modules/userinfo';
import Spinner from '../UI/atoms/spinner';
import UserInfoTemplate from '../templates/user_info_template';
import MyBucketList from '../templates/my_bucket_list';

const UserInfoPage = ({ match }) => {
  const { userNo } = match.params;
  const dispatch = useDispatch();
  const { buckets,loadingBuckets } = useSelector(({ userinfo, loading }) => ({
    buckets: userinfo.buckets,
    loadingBuckets: loading['userinfo/GET_USERBUCKETS'],
  }));
  
  useEffect(() => {
    dispatch(getUserInfo(userNo));
    dispatch(getIsFollowing(1,userNo));
    dispatch(getUserBuckets(userNo));
  }, [dispatch]);
  
  return (
    <>
      <Header isGoBack />
      {loadingBuckets && <Spinner />}
      {!loadingBuckets && buckets && <UserInfoTemplate userNo={userNo} />}
    </>
  );
};

export default UserInfoPage;
