import React from 'react';
import styled from 'styled-components';
import ButtonLayer from '../../components/ButtonLayer';

const WrapperBanner = styled.div`
    background-image: url('/assets/images/bg-header-home.png');
    width: 100%;
    aspect-ratio: 1.9;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 5fr 7fr;
`

const WrapperHeader = styled.div`
    
`

const WrapperFirstLine = styled.div`
    background-image: url('/assets/images/star-bg.png');
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

const LeftBanner = styled.div`
    margin-left: 70px;
`

const RightBanner = styled.div`
    position: relative;
    margin-right: 70px;
`

const ImageLayerRight = styled.img`
    width: 80%;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
`

const ImageRight = styled.img`
    width: 85%;
    height: auto;
    position: absolute;
    top: 35px;
    right: 20px;
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
    font-size: 64px;
    line-height: 78px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 12px;
`

const Desc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    color: rgba(255, 255, 255, 0.87);
    display: inline-block;
`

const TextNumber = styled(Desc)`
    color: #00D1AC;
    margin-bottom: 0;
    font-size: 26px;
`

const TextLua = styled(Desc)`
    color: #FABC46;
    margin-bottom: 0;
    font-size: 26px;
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
    return <WrapperHeader>
        <WrapperFirstLine>
            <FirstLineImg src='/assets/images/line-1.png' />
        </WrapperFirstLine>
        <WrapperBanner>
            <LeftBanner>
                <LuaLogoWrapper>
                    <LuaLogoImage src='/assets/images/logo.png' />
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
                    <SecondLineImg src='/assets/images/line-2.png' />
                </WrapperBtn>
            </LeftBanner>
            <RightBanner>
                <ImageLayerRight src='/assets/images/back-layer-img-header-home.png' />
                <ImageRight src='/assets/images/img-header-home.png' />
            </RightBanner>
        </WrapperBanner>
    </WrapperHeader>
}

export default HeaderBanner;