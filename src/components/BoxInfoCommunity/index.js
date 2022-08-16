import React from 'react';
import styled from 'styled-components';

const WrapperBox = styled.div`
    border: 0.25px solid rgba(255, 255, 255, 0.37);
    padding: 16px;
    display: flex;
    width: 300px;
    margin: 0 10px;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.6);
`

const Number = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: rgba(255, 255, 255, 0.87);
`

const Icon = styled.img``

const TextWrap = styled.div``

const BoxInfoCommunity = ({ title, number, icon }) => {
    return <WrapperBox>
        <TextWrap>
            <Title>{title}</Title>
            <Number>{number}</Number>
        </TextWrap>
        <Icon src={icon} />
    </WrapperBox>
}

export default BoxInfoCommunity;