import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const StyledButton = ({ type, style, variant, content, onClickHandler, disabled }) => {
  const useStyles = makeStyles({
    root: style,
  });
  const classes = useStyles();

  // 아이콘 버튼의 경우
  if (type === 'Icon')
    return (
      <Button
        className={classes.root}
        aria-label={variant}
        onClick={onClickHandler}
        disabled={disabled}
      >
        {content}
      </Button>
    );
  // 순수 텍스트만 있는 버튼의 경우
  return (
    <Button className={classes.root} variant={variant} onClick={onClickHandler} disabled={disabled}>
      {content}
    </Button>
  );
};

export default StyledButton;
