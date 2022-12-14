import React from 'react';
import styled from 'styled-components';

const WrapperCard = styled.div`
    padding: 16px 15px;
    background: #1A191E;
    border-radius: 20px;
    cursor: pointer;
    width: 100%;

    transition: transform .5s;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
        content: '';
        opacity: 0;
        z-index: -1;
    }

    &:hover,
    &:focus {
        // transform: scale3d(1.05, 1.05, 1);
        &::after {
            opacity: 1;
        }
        border: 0.5px solid #FFFFFF;
        background: #070707;

        > .title {
            color: #FFF177;
        }

        .image {
            -webkit-transform: scale(1.2);
	        transform: scale(1.2);
        }
    }
`

const WrappImg = styled.div`
    overflow: hidden;
    width: 100%;
    border-radius: 10px;
`

const CardImg = styled.img`
    width: 100%;
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
`

const CardDesc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 8px;
`

const CardTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 29px;
    text-align: center;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 8px;
    margin-top: 24px;
`

const CardDate = styled.p`
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #00D1AC;
`

const WrappCardDate = styled.div`
    height: 20px;
`

const HomeCard = ({ imgSrc, title, desc, onClickNavigate, date, isDisable }) => {
    return <WrapperCard onClick={onClickNavigate}>
        <WrappImg>
            <CardImg src={imgSrc} className='image' />
        </WrappImg>
        <CardTitle className='title'>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>

        <WrappCardDate>
            {
                isDisable && <CardDate>{date}</CardDate>
            }
        </WrappCardDate>
    </WrapperCard>
}

export default HomeCard;