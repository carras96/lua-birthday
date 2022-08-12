import React from 'react';
import styled from 'styled-components';

const WrapperCard = styled.div`
    padding: 16px 15px;
    background: #1A191E;
    border-radius: 20px;
`

const CardImg = styled.img``

const CardDesc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
`

const CardTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 8px;
`

const HomeCard = ({imgSrc, title, desc}) => {
    return <WrapperCard>
        <CardImg src={imgSrc}/>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
    </WrapperCard>
}

export default HomeCard;