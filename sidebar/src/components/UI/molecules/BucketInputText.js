import React from 'react';
import InputText from '../atoms/InputText';

const BucketInputText = ({style, label}) => {
    return (
        <InputText
        style={style} 
        variant="outlined" 
        label={label} />
    );
}

export default BucketInputText;