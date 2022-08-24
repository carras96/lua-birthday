import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ButtonLayer from '../../components/ButtonLayer';
import Parallax from 'parallax-js';
import { FadeInLeftDiv, FadeInRightDiv } from '../../styles';

const WrapperBanner = styled.div`
    background-image: url('assets/images/bg-header-home.png');
    width: 100%;
    aspect-ratio: 1.9;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 1fr 1fr;

    
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`

const WrapperHeader = styled.div`
`

const WrapperFirstLine = styled.div`
    background-image: url('assets/images/star-bg.png');
    width: 100%;
    aspect-ratio: 12;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
`

const FirstLineImg = styled.img`
    padding-top: 40px;
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
    margin-right: 70px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 767px) {
        margin-right: 0px;
        margin-top: 30px;
        justify-content: center;
    }
`

const WrappRight = styled.div`
    position: relative;
    width: 95%;
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

const LuaLogoWrapper = styled.div`
    margin-bottom: 25px;
`

const LuaLogoImage = styled.img`
    width: 200px;
    height: auto;
`

const Title = styled.p`
    font-weight: 700;
    font-size: 4rem;
    line-height: 78px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 12px;
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
    font-weight: bold;
`

const TextLua = styled(Desc)`
    color: #FABC46;
    margin-bottom: 0;
    font-size: 1.6rem;
    font-weight: bold;
`

const WrapperDesc = styled.div`
    margin-bottom: 45px;
`

const WrapperBtn = styled.div`
    position: relative;
`

const SecondLineImg = styled.img`
    position: absolute;
    left: 180px;
    top: 24px;
`
const Btn = styled.div`
    width: 150px;
`

const HeaderBanner = ({onClickAction}) => {
    const refImage = useRef(null);
    useEffect(() => {
        new Parallax(refImage.current);
    }, [refImage])
    return <WrapperHeader>
        <WrapperFirstLine>
            <FirstLineImg src='assets/images/line-1.png' />
        </WrapperFirstLine>
        <WrapperBanner>
            <LeftBanner>
                <LuaLogoWrapper>
                    <LuaLogoImage src='assets/images/logo.png' />
                </LuaLogoWrapper>
                <Title>
                    LuaSwap turns 2
                </Title>
                <WrapperDesc><Desc>Enjoy the birthday party</Desc>
                    <Desc>Share a <TextNumber>200,000</TextNumber> <TextLua>$LUA</TextLua> prize pool</Desc></WrapperDesc>
                <WrapperBtn>
                    <Btn>
                        <ButtonLayer onPress={onClickAction}>
                        I'm in
                    </ButtonLayer>
                    </Btn>
                    <SecondLineImg src='assets/images/line-2.png' />
                </WrapperBtn>
            </LeftBanner>
            <RightBanner >
                <WrappRight id="scene" ref={refImage}>
                    <ImageLayerRight src='assets/images/back-layer-img-header-home.png' data-depth="0.2"/>
                    <ImageRight src='assets/images/img-header-home.png' data-depth="0.1"/>
                    <ImageRight src='assets/images/img-header-home1.png' data-depth="0.3"/>
                    <ImageRight src='assets/images/img-header-home2.png' data-depth="0.6"/>
                </WrappRight>
            </RightBanner>
        </WrapperBanner>
    </WrapperHeader>
}

export default HeaderBanner;