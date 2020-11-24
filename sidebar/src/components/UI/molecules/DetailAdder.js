import { InputAdornment } from '@material-ui/core';
import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment"
import Icon from "@material-ui/core/Icon";
import InputText from '../atoms/InputText';
import StyledButton from '../atoms/StyledButton';

const DetailAdder = () => {
    {style, variant, label, defaultValue, onChangeHandler}

    const style = {
        color:'inherit',
    }

    const AddIconButton = (
        <Icon color="primary">add_circle</Icon>
    );

    return (
        <InputText 
        style={style} 
        variant="outlined"
        label="Detail 추가 등록"
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <StyledButton type="Icon" variant="add detail" content={AddIconButton} onClickHandler={onClickHandler} />
                </InputAdornment>
            )
        }} />
    );
}