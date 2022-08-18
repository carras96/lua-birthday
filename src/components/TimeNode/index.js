import React from 'react';
import styled from 'styled-components';

const TimeNodeEle = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.6);;
    border-radius: 50%;
    margin: 15px 0;
`

const TimeNode = ({isActive}) => {
    return <TimeNodeEle />
}

export default TimeNode;