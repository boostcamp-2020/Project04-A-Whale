import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const StyledButton = ({style, variant, content}) => {
    const useStyles = makeStyles({
        root: style,
    });

    const classes = useStyles();
    return (
        <Button className={classes.root} variant={variant}>{content}</Button>
    );

}

export default StyledButton;