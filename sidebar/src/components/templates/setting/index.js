import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import useStyles from './style';

const Setting = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    displayDark: false,
    browserSave: false,
    alarmOn: false,
  });
  const [alarm, setAlarm] = useState({ time: '09:10', dday: 7 });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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

  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <div>
        <Typography className={classes.title}>화면 설정</Typography>
        <div className={classes.section}>
          <Switch
            checked={state.displayDark}
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
            checked={state.alarmOn}
            onChange={handleChange}
            color="primary"
            name="alarmOn"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>켜기/끄기</span>
          <div>
            알림 시각:
            <input
              className={classes.input}
              type="time"
              name="time"
              value={alarm.time}
              onChange={alarmChange}
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
            />
            일까지 알림
          </div>
        </div>
        <Typography className={classes.title}>브라우저에 데이터 저장</Typography>
        <div className={classes.section}>
          <Switch
            checked={state.browserSave}
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
