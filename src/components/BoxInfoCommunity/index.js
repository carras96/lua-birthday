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
    z-index: 1;

    @media (max-width: 767px) {
        margin-bottom: 15px;
    }
`

const Title = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.6);
`

const Number = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 39px;
    color: rgba(255, 255, 255, 0.87);
`

const Icon = styled.div`
    width: 64px;
    height: 64px;
    background-image: url(${props => props.srcHover});
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-position: center;

    // &:hover {
    //     background-image: url(${props => props.srcHover});
    //     transition: all 0.3s ease-in-out;
    // }
`

const TextWrap = styled.div``

const BoxInfoCommunity = ({ title, number, icon, iconHover }) => {
    return <WrapperBox>
        <TextWrap>
            <Title>{title}</Title>
            <Number>{number}</Number>
        </TextWrap>
        <Icon src={icon} srcHover={iconHover}/>
    </WrapperBox>
}

export default BoxInfoCommunity;