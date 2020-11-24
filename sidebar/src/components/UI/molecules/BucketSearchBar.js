import React from 'react';
import InputText from '../atoms/InputText';

const BucketSearchBar = ({style, variant, label, defaultValue, onChangeHandler}) => {

    return (
        <InputText
        style={style} 
        variant={variant} 
        label={label} 
        defaultValue={defaultValue} 
        onChange={onChangeHandler} />
    );
}

export default BucketSearchBar;