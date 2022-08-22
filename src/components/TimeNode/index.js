import React from 'react';
import styled from 'styled-components';

const TimeNodeEle = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    margin: 15px 0;
    background-color: ${(props) => props.isActive ? '#FABC46' : 'transparent'}; 
    transition: all 0.3s ease-in-out;
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: #FABC46; 
        transition: all 0.3s ease-in-out;
    }
    
    &: before {
        position: absolute;
        width: 32px;
        height: 32px;
        background: rgba(255, 255, 255, 0.1);
        content: '';
        border-radius: 50%;
        top: -8px;
        left: -8px;
        display:${(props) => props.isActive ? 'block' : 'none'}; 
        transition: all 0.3s ease-in-out;
    }
`

const TimeNode = ({isActive}) => {
    return <TimeNodeEle isActive={isActive}/>
}

export default TimeNode;