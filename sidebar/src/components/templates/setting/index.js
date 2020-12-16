import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import useStyles from './style';
import { removeAllAlarms, updateAlarm, updateDueDetailsAndAlarm } from '../../../lib/alarm';
import { getWhaleLocalStorage, setWhaleLocalStorage } from '../../../lib/whaleLocalStorage';

const Setting = () => {
  const classes = useStyles();
  const [isWhaleExt, setIsWhaleExt] = useState(true);
  const [isWhaleLocalLoaded, setIsWhaleLocalLoaded] = useState(false);
  const [sw, setSw] = useState({ displayDark: false, alarmOn: false, browserSave: false });
  const [alarm, setAlarm] = useState({ time: '09:00', dday: 7 });

  const handleChange = (event) => {
    if (isWhaleExt) {
      setSw({ ...sw, [event.target.name]: event.target.checked });
    } else {
      alert('웨일 브라우저 확장앱에서만 사용하실 수 있습니다.');
    }
  };

  const alarmChange = (event) => {
    if (event.target.name === 'time') {
      const time = event.target.value;
      setAlarm({ ...alarm, time });
    } else if (event.target.name === 'dday') {
      let dday = event.target.value;
      dday = dday > 7 ? 7 : dday;
      dday = dday < 0 ? 0 : dday;
      setAlarm({ ...alarm, dday });
    }
  };

  const alarmTurnOff = async (items) => {
    // 알람 삭제
    await removeAllAlarms();
    // 스위치 업데이트
    setWhaleLocalStorage({ ...items, sw, alarm });
    return null;
  };

  const alarmTurnOn = async (items) => {
    return updateDueDetailsAndAlarm(items, { sw, alarm });
  };

  const changeDDay = async (items) => {
    return updateDueDetailsAndAlarm(items, { sw, alarm });
  };

  const changeTime = async (items) => {
    const dueDetails = [];
    return updateAlarm(items, dueDetails, { sw, alarm });
  };

  useEffect(() => {
    try {
      // whale API 고유 기능을 분기 처리
      const keys = ['sw', 'alarm', 'dueDetails'];
      getWhaleLocalStorage(keys, async (items) => {
        const localSw = items.sw;
        const localAlarm = items.alarm;

        // 로컬에 값이 존재
        if (localSw && localAlarm) {
          // 크롬 로컬에서 로드하지 않음
          if (!isWhaleLocalLoaded) {
            // 최초 불러오기
            setSw(localSw);
            setAlarm(localAlarm);
            setIsWhaleLocalLoaded(true);
          } else {
            // 로컬 스토리지 로드 후 변경 사항
            // alarm on -> off
            if (localSw.alarmOn && !sw.alarmOn) {
              await alarmTurnOff(items);
              return;
            }
            // alarm off -> on
            if (!localSw.alarmOn && sw.alarmOn) {
              await alarmTurnOn(items);
              return;
            }

            if (sw.alarmOn) {
              // alarm on + dday 변경
              if (localAlarm.dday !== alarm.dday) {
                await changeDDay(items);
                return;
              }
              // alarm on + time 변경
              if (localAlarm.time !== alarm.time) {
                await changeTime(items);
                return;
              }
            }
            setWhaleLocalStorage({ ...items, sw, alarm });
          }
        } else {
          // 로컬에 값이 없을 때, 저장
          setWhaleLocalStorage({ ...items, sw, alarm, dueDetails: [] });
        }
      });
    } catch (error) {
      setIsWhaleExt(false);
    }
  }, [sw, alarm]);

  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <div>
        <Typography className={classes.title}>화면 설정</Typography>
        <div className={classes.section}>
          <Switch
            checked={sw.displayDark}
            onChange={handleChange}
            color="primary"
            name="displayDark"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>화면 색상 반전</span>
        </div>
        <Typography className={classes.title}>알림 설정</Typography>
        <div className={classes.section}>
          <Switch
            checked={sw.alarmOn}
            onChange={handleChange}
            color="primary"
            name="alarmOn"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>켜기/끄기</span>
          <div>
            알림 시각: 매일&nbsp;
            <input
              className={classes.input}
              type="time"
              name="time"
              value={alarm.time}
              onChange={alarmChange}
              disabled={!sw.alarmOn}
            />
          </div>
          <div>
            D -
            <input
              className={classes.input}
              name="dday"
              type="number"
              value={alarm.dday}
              min="0"
              max="7"
              onChange={alarmChange}
              disabled={!sw.alarmOn}
            />
            일까지 알림
          </div>
        </div>
        <Typography className={classes.title}>브라우저에 데이터 저장</Typography>
        <div className={classes.section}>
          <Switch
            checked={sw.browserSave}
            onChange={handleChange}
            color="primary"
            name="browserSave"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>켜기/끄기</span>
          <Typography>
            <div style={{ display: 'inline-block' }}>할 일을 브라우저에 저장하여&nbsp;</div>
            <div style={{ display: 'inline-block' }}>데이터를 절약할 수 있습니다.</div>
          </Typography>
        </div>
        <Typography className={classes.title}>회원 정보</Typography>
        <div className={classes.section} style={{ padding: 0 }}>
          <Link className={classes.link} to="/user/info">
            <div>회원 정보 수정 / 탈퇴</div>
          </Link>
          <Divider />
          <Link className={classes.link} to="/user/password">
            <div>비밀번호 수정</div>
          </Link>
        </div>
        <Typography className={classes.title}>이용 약관</Typography>
        <div className={classes.section}>
          <Typography>
            <div style={{ display: 'inline-block' }}>신의성실하게 올해의 목표를 &nbsp;</div>
            <div style={{ display: 'inline-block' }}>함께 달성해 나갈 것을 약속합니다.</div>
          </Typography>
        </div>
        <Typography className={classes.title}>정보</Typography>
        <div className={classes.section}>
          <Typography>〈올해는 꼭〉</Typography>
          <Typography>
            ­<div style={{ display: 'inline-block' }}>└ 일 년 목표를 세우고 &nbsp;</div>­
            <div style={{ display: 'inline-block' }}>함께 달성해가는 웹/앱 애플리케이션</div>
          </Typography>
          <Typography>v 1.0.0</Typography>
          <Typography>Whale Browser Extension App</Typography>
          <Typography>Developers: S014, S048, J130, J174, J216</Typography>
          <Typography>Boostcamp</Typography>
          <Typography>
            <a href="https://github.com/boostcamp-2020/Project04-A-Whale">
              https://github.com/boostcamp-2020/Project04-A-Whale
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Setting;
