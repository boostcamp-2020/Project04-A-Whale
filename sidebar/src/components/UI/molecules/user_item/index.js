import React from 'react';
import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router-dom';
import Span from '../../atoms/span';
import useStyle, { nicknameStyle, descriptionStyle, profile, box } from './style';

const UserItem = ({ user }) => {
  const classes = useStyle();
  const history = useHistory();
  const { nickname, description, no } = user;
  const userDesc = description.length > 16 ? `${description.slice(0, 16)}...` : description;

  const onClickHandler = async () => {
    history.push(`/userInfo/${no}`);
  };

  return (
    <Card className={classes.UserItem} onClick={onClickHandler}>
      <div style={box}>
        <img style={profile} src="/empty-user.png" alt="profile" />
      </div>
      <div>
        <Span name="UserName" style={nicknameStyle} content={nickname} />
        <Span name="UserName" style={descriptionStyle} content={userDesc} />
      </div>
    </Card>
  );
};

export default UserItem;
