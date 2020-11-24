import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const StyledButton = ({style, variant, label, defaultValue}) => {
    const useStyles = makeStyles({
        root: style,
    });

    const classes = useStyles();
    return (
        <TextField className={classes.root} variant={variant} label={label} defaultValue={defaultValue} />
    );

}

export default StyledButton;