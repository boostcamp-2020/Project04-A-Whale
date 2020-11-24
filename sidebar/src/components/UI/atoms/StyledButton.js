import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const StyledButton = ({type, style, variant, content}) => {
    const useStyles = makeStyles({
        root: style,
    });

    const classes = useStyles();
    // 순수 텍스트만 있는 버튼의 경우
    if(type === "Text") return (<Button className={classes.root} variant={variant}>{content}</Button>);
    // 아이콘 버튼의 경우
    else if(type === "Icon") return (<Button className={classes.root} aria-label={Variant}>{content}</Button>);

}

export default StyledButton;