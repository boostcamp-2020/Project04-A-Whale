import React from 'react';
import InputText from '../atoms/InputText';

const BucketInputText = ({label}) => {
    const style = {
        color:'inherit',
    }
    return (
        <InputText
        style={style} 
        variant="outlined" 
        label={label} />
    );
}

export default BucketInputText;