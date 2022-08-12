import React from 'react';
import styled from 'styled-components';

const WrapperBtn = styled.span`
    display: block;
`

const Button = styled.span`
    height: 48px;
    max-width: 200px;
    width: auto;
    background: #FFFFFF;
    padding: 0px 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    cursor: pointer;

    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid #FFFFFF;
        left: -8px;
        top: 8px;
    }
`

const Text = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #1A1A1A;
`

const ButtonLayer = ({children, onPress}) => {
    return <WrapperBtn>
        <Button onClick={onPress}>
           <Text>{children}</Text> 
        </Button>
    </WrapperBtn>
}

export default ButtonLayer;