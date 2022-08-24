import React from 'react';
import styled, { keyframes } from 'styled-components';

const waves = keyframes`
    0% {
        opacity: 0;
        transform: scale(1);
    }

    10% {
        opacity: 0.2;
        transform: scale(2);
    }

    20% {
        opacity: 0.4;
        transform: scale(3);
    }

    30% {
        opacity: 0.6;
        transform: scale(4);
    }

    40% {
        opacity: 0.8;
        transform: scale(5);
    }

    50% {
        opacity: 1;
        transform: scale(6);
    }

    60% {
        opacity: 0.8;
        transform: scale(7);
    }

    70% {
        opacity: 0.6;
        transform: scale(8);
    }

    80% {
        opacity: 0.4;
        transform: scale(9);
    }

    90% {
        opacity: 0.2;
        transform: scale(10);
    }

    100% {
        opacity: 0.1;
        transform: scale(11);
    }
`

const Wrapper = styled.div`
    width: 70px;
    height: 70px;
    
    position: relative;
`

const Point = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.width}px;
    border-radius: 50%;
    border: .1px solid #FFFFFF;
    animation: ${waves} ${(props) => props.time[0]}s linear ${(props) => props.time[1]}s infinite normal;
    position: absolute;
    top: ${(props) => (70 - Number(props.width)) / 2}px;
    left: ${(props) => (70 - Number(props.width)) / 2}px;
`



const CircleWave = () => {
    return <Wrapper>
        <Point width='1' time={[1, 0.5]}/>
        <Point width='2' time={[2, 1]}/>
        <Point width='4' time={[3, 2]}/>
        <Point width='6' time={[4, 3]}/>
        <Point width='8' time={[5, 4]}/>
    </Wrapper>
}

export default CircleWave;