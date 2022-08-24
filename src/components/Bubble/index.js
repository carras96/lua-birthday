import React from 'react';
import styled, { keyframes } from 'styled-components';

/* KEYFRAMES */

const animateBubble = keyframes`
    0% {
        margin-top: 200px;
    }
    100% {
        margin-top: -800px;
    }
`

const BubbleEle = styled.div`
    width: ${props => props.width};
    height: ${props => props.width};
    border: ${props => props.isSort ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.37)' };
    border-radius: 50%;
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};

	
    animation-name: ${animateBubble};
    animation-duration: ${props => `${props.time[0]}s`};
    animation-timing-function: linear;
	animation-iteration-count: infinite;
`
// animation: ${props => `${animateBubble} ${props.time[0]}s linear infinite, ${sideWays} ${props.time[1]}s ease-in-out infinite alternate`};
// animation-name: ${animateBubble}, ${sideWays};
//     animation-duration: ${props => `${props.time[0]}s, ${props.time[1]}s`};
//     animation-fill-mode: linear infinite, ease-in-out infinite alternate;

const Bubble = ({width, left, top, right, bottom, isSort, time, scale}) => {
    return <BubbleEle width={width} left={left} top={top} right={right} bottom={bottom} isSort={isSort} time={time} scale={scale}/>
}

export default Bubble;