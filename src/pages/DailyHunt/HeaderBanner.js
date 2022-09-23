import Parallax from 'parallax-js';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ButtonLayer from '../../components/ButtonLayer';
import { FadeInLeftDiv, FadeInRightDiv } from '../../styles';

const CloudImageLeft = styled.img`
    position: absolute;
    top: 40%;
    left: 0;
    width: 60%;
`

const WrapperBanner = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    height: 500px;
    padding-bottom: 150px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`

const CloudImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
`

const WrapperHeader = styled.div`
    position: relative;
    padding-top: 250px;

    @media (max-width: 767px) {
        padding-top: 100px;
    }
`

const LeftBanner = styled(FadeInLeftDiv)`
    margin-left: 70px;

    @media (max-width: 767px) {
        margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

const RightBanner = styled(FadeInRightDiv)`
    position: relative;
    margin-right: 70px;
    @media (max-width: 767px) {
        margin-right: 0px;
        margin-top: 30px;
    }
`

const ImageLayerRight = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 767px) {
        width: 100%;
    }
`

const ImageRight = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    top: 45px !important;
    left: unset !important;
    right: 20px !important;

    @media (max-width: 767px) {
        width: 90%;
        right: 5% !important;
        left: 5% !important;
    }
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 59px;
    color: rgba(255, 255, 255, 0.87);
`

const Desc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 48px;
    color: rgba(255, 255, 255, 0.87);
    display: inline-block;
`

const TextNumber = styled(Desc)`
    color: #00D1AC;
    margin-bottom: 0;
    font-size: 1.6rem;
`

const TextLua = styled(Desc)`
    color: #FABC46;
    margin-bottom: 0;
    font-size: 1.6rem;
`

const WrapperDesc = styled.div`
    margin-bottom: 45px;
`

const WrapperBtn = styled.div`
    position: relative;
`

const SecondLineImg = styled.img`
    position: absolute;
    left: 220px;
    top: 24px;
`
const Btn = styled.div`
    width: 180px;
`

const HeaderBanner = ({onClickAction}) => {

    const refImage = useRef(null);
    useEffect(() => {
        new Parallax(refImage.current);
    }, [refImage])
    return <WrapperHeader>
        <CloudImage src={`${process.env.PUBLIC_URL}/assets/images/cloud2.png`}/>
        <CloudImageLeft src={`${process.env.PUBLIC_URL}/assets/images/cloud4.png`}/>
        <WrapperBanner>
            <LeftBanner>
                <Title>
                    Treasure Hunt
                </Title>
                <WrapperDesc>
                    <Desc>Complete daily tasks to win a part of</Desc>
                    <Desc><TextNumber>1,000</TextNumber> <TextLua>$LUA</TextLua></Desc></WrapperDesc>
                <WrapperBtn>
                    <Btn>
                        <ButtonLayer onPress={onClickAction}>
                            Join Now
                        </ButtonLayer>
                    </Btn>
                    <SecondLineImg src={`${process.env.PUBLIC_URL}/assets/images/line-2.png`} />
                </WrapperBtn>
            </LeftBanner>
            <RightBanner ref={refImage}>
                <ImageLayerRight src={`${process.env.PUBLIC_URL}/assets/images/back-layer-img-header-home.png`} data-depth="0.3"/>
                <ImageRight src={`${process.env.PUBLIC_URL}/assets/images/img-header-daily-hunt.png`} data-depth="0.6"/>
            </RightBanner>
        </WrapperBanner>
    </WrapperHeader>
}

export default HeaderBanner;