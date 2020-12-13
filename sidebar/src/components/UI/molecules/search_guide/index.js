import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import useStyle from './style';
import useMousePosition from '../../../../hooks/useMousePosition';

const SearchGuide = ({ isHover }) => {
  const { posX, posY } = useMousePosition();
  const isVisible = isHover ? 'block' : 'none';
  const classes = useStyle({ posX, posY, isVisible });

  return (
    <Card className={classes.root}>
      <Typography className={classes.top}>다른 사람들의 목표가 궁금하신가요?</Typography>
      <Typography className={classes.middle}>
        검색기능을 이용하여 다른 사람들의 목표를 볼수있고
      </Typography>
      <Typography className={classes.low}>불러와서 내 마음대로 수정할 수 있습니다.</Typography>
    </Card>
  );
};
export default SearchGuide;
