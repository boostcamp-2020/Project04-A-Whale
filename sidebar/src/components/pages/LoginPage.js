import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from '../templates/login';
import { userLogin } from '../../lib/api';
import { updateDueDetailsAndAlarm } from '../../lib/alarm';
import { getWhaleLocalStorage, removeAPIStorage } from '../../lib/whaleLocalStorage';
import { getBuckets } from '../../modules/buckets';
import { getUser } from '../../modules/user';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });
  const history = useHistory();
  const resetLoginInfo = () => {
    setLoginInfo({ id: '', password: '' });
  };
  const alarmSetting = async () => {
    try {
      // 알람 추가하기
      const keys = ['sw', 'alarm'];
      const callback = async (items) => {
        const { sw, alarm } = items;
        console.log(sw, alarm);
        if (sw && sw.alarmOn) {
          await updateDueDetailsAndAlarm(items, { sw, alarm });
        }
        return null;
      };
      getWhaleLocalStorage(keys, callback);
    } catch (error) {
      console.log('웨일 확장앱이 아닙니다. 알람을 설정하지 않습니다.');
    }
  };

  const axiosLogin = useCallback(async (body) => {
    const result = await userLogin(body);
    if (result) {
      localStorage.setItem('accessToken', result.data.accessToken);
      resetLoginInfo();
      await alarmSetting();
      dispatch(getBuckets());
      dispatch(getUser());
      history.replace('/');
    }
  }, []);

  useEffect(() => {
    removeAPIStorage(['/api/buckets', '/api/users/info'], () => {
      console.log('기존 버킷 및 사용자 정보 관련 스토리지 삭제');
    });
    if (loginInfo.id && loginInfo.password) {
      axiosLogin({ ...loginInfo });
    }
  }, [loginInfo]);
  return (
    <>
      <Login setLoginInfo={setLoginInfo} />
    </>
  );
};

export default LoginPage;
