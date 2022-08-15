import React from 'react';
import styled from 'styled-components';

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
`

const Bubble = ({width, left, top, right, bottom, isSort}) => {
    return <BubbleEle width={width} left={left} top={top} right={right} bottom={bottom} isSort={isSort}/>
}

export default Bubble;