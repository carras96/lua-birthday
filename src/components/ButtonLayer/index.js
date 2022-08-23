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

    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 0px;
    text-shadow: none;
    -webkit-transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
            transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;

    &:hover {
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
        outline-offset: 15px;
        outline-color: rgba(255, 255, 255, 0);
        text-shadow: 1px 1px 2px #427388;
    }

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
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 24px;
    color: #1A1A1A;
`

const ButtonLayer = ({ children, onPress }) => {
    return <WrapperBtn>
        <Button onClick={onPress}>
            <Text>{children}</Text>
        </Button>
    </WrapperBtn>
}

export default ButtonLayer;