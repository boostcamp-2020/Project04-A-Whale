import React from 'react';
import styled from 'styled-components';
import BucketInputText from '../molecules/BucketInputText';

const BucketContentsWrapper = styled.div`
    display: flex;
`;

const titleStyle = {
    width: "100%",
    height: "400px",
} 

const decriptionStyle = {
    width: "100%",
    height: "800px",
} 

const BucketContents = () => {
    return (
        <BucketContentsWrapper>
            <BucketInputText style={titleStyle} label="목표 Title 작성" />
            <BucketInputText style={decriptionStyle} label="목표 Description 작성" />
        </BucketContentsWrapper>
    );
}

export default BucketContents;