import React from 'react';
import Card from '@material-ui/core/Card';
import useStyle from './style';
import useMousePosition from '../../../../lib/useMousePosition';

const SearchGuide = ({ isHover }) => {
  const { posX, posY } = useMousePosition();
  const isVisible = isHover ? 'block' : 'none';
  const classes = useStyle({ posX, posY, isVisible });

  return (
    <Card className={classes.root}>
      <span className={classes.title}>다른 사람들의 목표가 궁금하신가요?</span>
      <br />
      <span className={classes.desc}>
        검색기능을 이용하여 다른 사람들의 목표를 볼수있고
        <br />
        불러와서 내 마음대로 수정할 수 있습니다.
      </span>
    </Card>
  );
};
export default SearchGuide;
